import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  meta: string;
  tags: string[];
  date: string;
  body: string;
}

const BlogPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
        const keys = Object.keys(modules).sort().reverse();
        const posts: BlogPost[] = [];

        for (const k of keys) {
          // @ts-ignore
          const raw = await modules[k]();
          const parsed = parseFrontmatter(raw as string);
          if (!parsed) continue;

          const meta = parsed.meta;
          const postData: BlogPost = {
            id: meta.slug || k.split('/').pop()?.replace('.md', '') || k,
            title: meta.title || 'Untitled',
            slug: meta.slug || meta.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '',
            meta: meta.meta || '',
            tags: meta.tags || [],
            date: meta.date || '',
            body: parsed.body || ''
          };
          posts.push(postData);
        }

        setAllPosts(posts);

        if (slug) {
          const foundPost = posts.find(p => p.slug === slug);
          setPost(foundPost || null);
        }
      } catch (err) {
        console.error('Error loading blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, [slug]);

  const parseFrontmatter = (raw: string) => {
    const fm = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const m = raw.match(fm);
    if (!m) return null;

    const metaRaw = m[1];
    const body = m[2];
    const obj: any = {};

    metaRaw.split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx === -1) return;
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();

      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      if (val.startsWith('[') && val.endsWith(']')) {
        try {
          obj[key] = JSON.parse(val.replace(/'/g, '"'));
        } catch {
          obj[key] = [];
        }
      } else {
        obj[key] = val;
      }
    });

    return { meta: obj, body };
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="text-slate-600">Loading...</p>
        </div>
      </Layout>
    );
  }

  // Single post view
  if (slug && post) {
    return (
      <Layout>
        <SEO
          title={post.title}
          description={post.meta}
          image="https://stravotech.com/og-image.png"
        />
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-700 mb-8 inline-block">
            ← Back to Blog
          </Link>

          <article className="bg-white rounded-2xl p-8 border border-slate-100">
            <header className="mb-8 pb-8 border-b border-slate-200">
              <h1 className="text-4xl font-black text-slate-900 mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                <time>{new Date(post.date).toLocaleDateString()}</time>
                <span>•</span>
                <span>{Math.ceil(post.body.split(' ').length / 200)} min read</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-slate max-w-none">
              {post.body.split('\n').map((line, i) => {
                if (line.startsWith('# ')) {
                  return <h1 key={i} className="text-3xl font-black text-slate-900 mt-8 mb-4">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-6 mb-3">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-bold text-slate-900 mt-4 mb-2">{line.slice(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                  return <li key={i} className="ml-6 text-slate-700">{line.slice(2)}</li>;
                }
                if (line.trim() === '') {
                  return <div key={i} className="h-4"></div>;
                }
                return <p key={i} className="text-slate-700 leading-relaxed mb-3">{line}</p>;
              })}
            </div>
          </article>

          {/* Related posts */}
          {allPosts.length > 1 && (
            <section className="mt-16">
              <h2 className="text-2xl font-black text-slate-900 mb-6">More Articles</h2>
              <div className="grid gap-4">
                {allPosts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="p-4 border border-slate-200 rounded-lg hover:border-indigo-500 transition-colors">
                    <h3 className="font-bold text-slate-900 hover:text-indigo-600">{p.title}</h3>
                    <p className="text-sm text-slate-600">{p.meta}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </Layout>
    );
  }

  // Blog list view
  return (
    <Layout>
      <SEO
        title="Blog - Stravotech"
        description="Read articles about calculators, finance tools, optimization, and more."
      />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Blog</h1>
          <p className="text-xl text-slate-600">Tips, tricks, and insights about our tools</p>
        </header>

        {allPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {allPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <article className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-indigo-500 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h2 className="text-2xl font-black text-slate-900 hover:text-indigo-600">{post.title}</h2>
                    <time className="text-sm text-slate-500 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="text-slate-600 mb-4">{post.meta}</p>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;

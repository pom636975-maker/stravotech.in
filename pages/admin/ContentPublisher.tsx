import React, { useEffect, useState } from 'react';
import { publishArticle } from '../../services/firebaseService';
import { AdminStore } from '../../services/AdminStore';

type ArticleBrief = {
  id: string;
  title: string;
  slug: string;
  meta: string;
  tags: string[];
  date: string;
  body: string;
};

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
      try { obj[key] = JSON.parse(val.replace(/'/g, '"')); } catch { obj[key] = []; }
    } else obj[key] = val;
  });
  return { meta: obj, body };
};

const ContentPublisher: React.FC = () => {
  const [articles, setArticles] = useState<ArticleBrief[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load all markdown briefs from content/blog using Vite import
    const modules = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default' });
    (async () => {
      const keys = Object.keys(modules).sort();
      const items: ArticleBrief[] = [];
      for (const k of keys) {
        // @ts-ignore
        const raw = await modules[k]();
        const parsed = parseFrontmatter(raw as string);
        if (!parsed) continue;
        const meta = parsed.meta;
        items.push({
          id: meta.slug || k.split('/').pop()?.replace('.md','') || k,
          title: meta.title || 'Untitled',
          slug: meta.slug || meta.title?.toLowerCase().replace(/[^a-z0-9]+/g,'-') || '',
          meta: meta.meta || '',
          tags: meta.tags || [],
          date: meta.date || '',
          body: parsed.body || ''
        });
      }
      setArticles(items);
    })();
  }, []);

  const handlePublish = async (a: ArticleBrief) => {
    if (!AdminStore.getAuth()) return alert('Unauthorized: please sign in as admin');
    setLoading(true);
    try {
      await publishArticle(a.slug || a.id, a);
      alert(`Published: ${a.title}`);
    } catch (e) {
      console.error(e);
      alert('Publish failed. See console.');
    } finally {
      setLoading(false);
    }
  };

  const handlePublishAll = async () => {
    if (!AdminStore.getAuth()) return alert('Unauthorized: please sign in as admin');
    if (!articles.length) return alert('No articles to publish');
    setLoading(true);
    let success = 0;
    for (let i = 0; i < articles.length; i++) {
      const a = articles[i];
      try {
        await publishArticle(a.slug || a.id, a);
        success++;
      } catch (e) {
        console.error('Publish failed for', a.slug, e);
      }
    }
    setLoading(false);
    alert(`Published ${success} / ${articles.length} articles`);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-black">Content Publisher</h2>
      <p className="text-sm text-slate-500">Load markdown briefs from <code>content/blog/</code> and publish to Firestore as articles.</p>
      <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2 flex justify-end">
            <button disabled={loading} onClick={handlePublishAll} className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold">Publish All</button>
          </div>
        {articles.map(a => (
          <div key={a.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-lg mb-2">{a.title}</h3>
            <p className="text-xs text-slate-500 mb-4">slug: {a.slug} • tags: {a.tags.join(', ')}</p>
            <p className="text-sm text-slate-700 mb-4 line-clamp-4">{a.meta}</p>
            <div className="flex space-x-3">
              <button disabled={loading} onClick={() => handlePublish(a)} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold">Publish</button>
              <a className="px-4 py-2 bg-slate-100 rounded-lg" href={`/#/admin/editor?slug=${a.slug}`}>Edit</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPublisher;

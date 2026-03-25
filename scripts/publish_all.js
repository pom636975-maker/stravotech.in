// scripts/publish_all.js
// Usage: place serviceAccountKey.json in project root, then run:
// npm install firebase-admin gray-matter --save-dev --legacy-peer-deps
// node scripts/publish_all.js

const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');
const matter = require('gray-matter');

const keyPath = path.join(process.cwd(), 'serviceAccountKey.json');
if (!fs.existsSync(keyPath)) {
  console.error('Missing serviceAccountKey.json in project root. Generate from Firebase Console -> Service Accounts');
  process.exit(1);
}

const serviceAccount = require(keyPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function publishAll() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  if (!fs.existsSync(dir)) {
    console.error('No content/blog directory found');
    process.exit(1);
  }

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  let success = 0;
  for (const f of files) {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const parsed = matter(raw);
    const meta = parsed.data || {};
    const body = parsed.content || '';
    const slug = meta.slug || f.replace('.md','');
    const docRef = db.collection('articles').doc(slug);
    try {
      await docRef.set({
        title: meta.title || 'Untitled',
        slug: slug,
        meta: meta.meta || '',
        body,
        tags: meta.tags || [],
        publishedAt: admin.firestore.FieldValue.serverTimestamp(),
        rawDate: meta.date || null
      });
      console.log('Published:', slug);
      success++;
    } catch (err) {
      console.error('Failed:', slug, err.message || err);
    }
  }
  console.log(`Done. Published ${success}/${files.length}`);
  process.exit(0);
}

publishAll().catch(err => { console.error(err); process.exit(1); });

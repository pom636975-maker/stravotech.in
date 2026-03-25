import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration: prefer Vite env vars, but fall back to the
// exact values you provided so the project can be inspected without
// setting environment variables or installing Node immediately.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyBFFspGRLmoDRAGlg71m5cdy_QQCzHJCKk',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'stravotech-28862.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'stravotech-28862',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'stravotech-28862.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '529111148262',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:529111148262:web:acc34f861ae7b3996f3d27',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-RKZ634SRHP',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics only when running in the browser and supported.
let analytics: ReturnType<typeof getAnalytics> | null = null;
(async () => {
  if (typeof window !== 'undefined') {
    try {
      if (await isSupported()) {
        analytics = getAnalytics(app);
      }
    } catch (e) {
      // analytics not available or not supported; ignore
    }
  }
})();

export { analytics };


import { ToolMetadata } from '../types';
import { TOOLS } from '../constants';
import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

const STORAGE_KEY = 'stravotech_admin_overrides';
const AUTH_KEY = 'stravotech_admin_auth';

export const AdminStore = {
  getAuth: () => !!auth.currentUser || localStorage.getItem(AUTH_KEY) === 'true',

  login: async (email: string, password: string): Promise<boolean> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    } catch (err) {
      // Fallback to legacy static check for local/offline usage
      const ADMIN_EMAIL = 'pom636975@gmail.com';
      const ADMIN_PASS = 'poornimapatel098';

      if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        localStorage.setItem(AUTH_KEY, 'true');
        return true;
      }
      return false;
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
    } catch (e) {
      // ignore
    }
    localStorage.removeItem(AUTH_KEY);
  },

  getOverrides: (): Record<string, Partial<ToolMetadata>> => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  },

  updateTool: (toolId: string, updates: Partial<ToolMetadata>) => {
    const overrides = AdminStore.getOverrides();
    overrides[toolId] = { ...overrides[toolId], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    window.dispatchEvent(new Event('storage_update'));
  },

  getMergedTools: (): ToolMetadata[] => {
    const overrides = AdminStore.getOverrides();
    return TOOLS.map(tool => ({
      ...tool,
      ...(overrides[tool.id] || { status: 'ON' })
    }));
  }
};

export const getDashboardStats = async () => {
  try {
    const ref = doc(db, 'stats', 'global');
    const snap = await getDoc(ref);

    if (snap.exists()) {
      return snap.data();
    }

    return null;
  } catch (err) {
    console.error('Failed to fetch dashboard stats:', err);
    return null;
  }
};

export const increaseViews = async () => {
  try {
    const ref = doc(db, 'stats', 'global');
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const current = snap.data().totalViews || 0;

      await updateDoc(ref, {
        totalViews: current + 1,
      });
    }
  } catch (err) {
    console.error('Failed to increase views:', err);
  }
};

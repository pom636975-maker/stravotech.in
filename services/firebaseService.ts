/**
 * Firebase Service - Production-ready backend logic
 * Handles all Firestore operations with atomic updates and error handling
 */

import {
  doc,
  updateDoc,
  increment,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  serverTimestamp,
  WriteBatch,
  writeBatch,
  setDoc,
  doc as docRef,
} from 'firebase/firestore';
import { db } from './firebase';

const ADMIN_EMAIL = 'pom636975@gmail.com';
const VIEWS_SESSION_KEY = 'stravotech_viewed_tools';

/**
 * Get all tools from Firestore
 * @returns Array of tool documents
 */
export const getAllTools = async () => {
  try {
    const toolsRef = collection(db, 'tools');
    const snapshot = await getDocs(toolsRef);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any[];
  } catch (error) {
    console.error('Error fetching tools:', error);
    throw error;
  }
};

/**
 * Get only enabled tools (public view)
 * @returns Array of enabled tool documents
 */
export const getEnabledTools = async () => {
  try {
    const toolsRef = collection(db, 'tools');
    const q = query(toolsRef, where('enabled', '==', true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as any[];
  } catch (error) {
    console.error('Error fetching enabled tools:', error);
    throw error;
  }
};

/**
 * Get global stats from Firestore
 * @returns Global stats document
 */
export const getGlobalStats = async () => {
  try {
    const statsRef = doc(db, 'stats', 'global');
    const snapshot = await getDoc(statsRef);
    return snapshot.exists() ? snapshot.data() : null;
  } catch (error) {
    console.error('Error fetching global stats:', error);
    throw error;
  }
};

/**
 * Increment tool views - ATOMIC OPERATION
 * Prevents race conditions and ensures accuracy
 * @param toolId - The tool's document ID
 */
export const incrementToolViews = async (toolId: string) => {
  // Prevent double-count using sessionStorage
  const viewedTools = JSON.parse(sessionStorage.getItem(VIEWS_SESSION_KEY) || '{}');
  
  if (viewedTools[toolId]) {
    console.log(`⏭️ Tool ${toolId} already counted this session`);
    return;
  }

  try {
    const batch = writeBatch(db);

    // Atomically increment tool views
    const toolRef = doc(db, 'tools', toolId);
    batch.update(toolRef, {
      views: increment(1)
    });

    // Atomically increment global total views
    const statsRef = doc(db, 'stats', 'global');
    batch.update(statsRef, {
      totalViews: increment(1),
      lastUpdated: serverTimestamp()
    });

    // Commit batch atomically
    await batch.commit();

    // Mark as viewed in this session
    viewedTools[toolId] = true;
    sessionStorage.setItem(VIEWS_SESSION_KEY, JSON.stringify(viewedTools));

    console.log(`✓ Views incremented for ${toolId}`);
  } catch (error) {
    console.error(`Error incrementing views for ${toolId}:`, error);
    throw error;
  }
};

/**
 * Toggle tool enabled status
 * Admin only operation
 * @param toolId - The tool's document ID
 * @param enabled - New enabled status
 * @param adminEmail - Email of admin making the change
 */
export const toggleToolStatus = async (
  toolId: string,
  enabled: boolean,
  adminEmail: string
) => {
  // Verify admin access
  if (adminEmail !== ADMIN_EMAIL) {
    throw new Error('Unauthorized: Only admins can toggle tool status');
  }

  try {
    const toolRef = doc(db, 'tools', toolId);
    await updateDoc(toolRef, {
      enabled,
      lastUpdated: serverTimestamp()
    });

    console.log(`✓ Tool ${toolId} ${enabled ? 'ENABLED' : 'DISABLED'}`);
  } catch (error) {
    console.error(`Error toggling tool ${toolId}:`, error);
    throw error;
  }
};

/**
 * Calculate dashboard statistics from Firestore
 * @returns Dashboard stats object
 */
export const calculateDashboardStats = async () => {
  try {
    const allTools = await getAllTools();
    const globalStats = await getGlobalStats();

    const totalTools = allTools.length;
    const liveTools = allTools.filter((tool: any) => tool.enabled === true).length;
    const totalViews = globalStats?.totalViews || 0;

    return {
      totalTools,
      liveTools,
      totalViews,
      lastUpdated: globalStats?.lastUpdated || new Date()
    };
  } catch (error) {
    console.error('Error calculating dashboard stats:', error);
    throw error;
  }
};

/**
 * Get top N tools by views
 * @param limit - Number of tools to fetch
 * @returns Top tools by view count
 */
export const getTopToolsByViews = async (limit: number = 5) => {
  try {
    const tools = await getAllTools();
    return tools
      .sort((a: any, b: any) => (b.views || 0) - (a.views || 0))
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top tools:', error);
    throw error;
  }
};

/**
 * Initialize global stats document if it doesn't exist
 * Called on first setup
 */
export const initializeGlobalStats = async () => {
  try {
    const statsRef = doc(db, 'stats', 'global');
    const snapshot = await getDoc(statsRef);

    if (!snapshot.exists()) {
      await updateDoc(statsRef, {
        totalViews: 0,
        lastUpdated: serverTimestamp()
      });
      console.log('✓ Global stats initialized');
    }
  } catch (error) {
    console.error('Error initializing global stats:', error);
  }
};

/**
 * Clear session storage (for testing/logout)
 */
export const clearSessionViews = () => {
  sessionStorage.removeItem(VIEWS_SESSION_KEY);
  console.log('✓ Session views cleared');
};

/**
 * Publish or update an article in Firestore (admin only)
 * @param id - document id (slug)
 * @param article - article data { title, slug, meta, body, tags, date }
 */
export const publishArticle = async (id: string, article: any) => {
  try {
    const ref = doc(db, 'articles', id);
    await setDoc(ref, {
      title: article.title || '',
      slug: article.slug || id,
      meta: article.meta || '',
      body: article.body || '',
      tags: article.tags || [],
      publishedAt: serverTimestamp(),
      rawDate: article.date || null
    });
    console.log(`✓ Article published: ${id}`);
  } catch (error) {
    console.error('Error publishing article:', error);
    throw error;
  }
};

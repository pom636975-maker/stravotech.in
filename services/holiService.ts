import { HOLI_TEMPLATES, HoliTemplate } from '../data/holiTemplates';
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// simple abstraction around templates storage, could be replaced by Firestore
export const fetchTemplates = async (search = '', category?: string): Promise<HoliTemplate[]> => {
  let results = HOLI_TEMPLATES;

  if (category) {
    results = results.filter((t) => t.category === category);
  }
  if (search) {
    results = results.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()));
  }
  return results;
};

// save a user design to Firestore
export interface HoliDesign {
  userId: string;
  templateId: string;
  dataUrl: string;
  createdAt: Date;
}

export const saveDesign = async (design: HoliDesign) => {
  const coll = collection(db, 'holiDesigns');
  await addDoc(coll, {
    ...design,
    createdAt: design.createdAt.toISOString(),
  });
};

// fetch user designs, optional
export const getUserDesigns = async (userId: string) => {
  const coll = collection(db, 'holiDesigns');
  const q = query(coll, where('userId', '==', userId));
  const snaps = await getDocs(q);
  return snaps.docs.map((doc) => ({ id: doc.id, ...(doc.data() as any) }));
};

import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { getUserDesigns } from '../services/holiService';

const UserDashboard: React.FC = () => {
  const { user, loading } = useAuth();
  const [designs, setDesigns] = useState<any[]>([]);

  useEffect(() => {
    if (user) {
      getUserDesigns(user.uid).then(setDesigns);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to see your designs.</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">My Holi Designs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {designs.map((d) => (
          <div key={d.id} className="border p-2">
            <img src={d.dataUrl} alt="design" className="w-full" />
            <p className="text-xs text-gray-500">{new Date(d.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;

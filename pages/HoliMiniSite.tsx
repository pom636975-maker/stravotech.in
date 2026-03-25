import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Confetti from 'react-confetti';

const HoliMiniSite: React.FC = () => {
  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    document.title = `Happy Holi from ${username}`;
  }, [username]);

  const shareWhatsApp = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Happy Holi from ${username}!\n${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-300 via-yellow-200 to-blue-300">
      <Confetti recycle={false} />
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
        Happy Holi from {username}
      </h1>
      <button
        onClick={shareWhatsApp}
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Share on WhatsApp
      </button>
    </div>
  );
};

export default HoliMiniSite;

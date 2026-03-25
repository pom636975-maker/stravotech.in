import React from 'react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=Stravotech`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
      <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
        <i className="fa-solid fa-share-nodes mr-2"></i>
        Share This Tool
      </h4>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleShare('twitter')}
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="fa-brands fa-twitter mr-2"></i> Twitter
        </button>
        <button
          onClick={() => handleShare('facebook')}
          className="inline-flex items-center px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
        >
          <i className="fa-brands fa-facebook mr-2"></i> Facebook
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp
        </button>
        <button
          onClick={() => handleShare('reddit')}
          className="inline-flex items-center px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors"
        >
          <i className="fa-brands fa-reddit mr-2"></i> Reddit
        </button>
      </div>
      <p className="text-blue-700 text-sm mt-3">
        Help others discover this free tool! Sharing increases visibility and helps more people.
      </p>
    </div>
  );
};

export default SocialShare;

import React from 'react';

interface AdProps {
  type: 'banner' | 'sidebar' | 'inline' | 'footer';
  className?: string;
}

const AdPlaceholder: React.FC<AdProps> = ({ type, className = "" }) => {
  const styles = {
    banner: "w-full h-[90px] md:h-[120px]",
    sidebar: "w-full h-[600px]",
    inline: "w-full h-[250px] my-6",
    footer: "w-full h-[100px] mt-8"
  };

  return (
    <div className={`ad-placeholder rounded ${styles[type]} ${className}`}>
      <span className="font-medium uppercase tracking-widest text-xs opacity-50">
        Advertisement - {type}
      </span>
    </div>
  );
};

export default AdPlaceholder;

import React, { useEffect } from 'react';

interface AdSenseBannerProps {
  adSlot: string;
  style?: React.CSSProperties;
  className?: string;
}

const AdSenseBanner: React.FC<AdSenseBannerProps> = ({ adSlot, style, className }) => {
  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-banner ${className || ''}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5876536372948405"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseBanner;
import React from 'react';

interface Props {
  visible?: boolean;
}

const Watermark: React.FC<Props> = ({ visible = true }) => {
  if (!visible) return null;
  return (
    <div className="absolute bottom-2 right-2 text-xs text-white opacity-70 pointer-events-none">
      Made with Stravotech
    </div>
  );
};

export default Watermark;

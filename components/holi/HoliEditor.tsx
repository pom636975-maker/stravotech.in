import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useAuth } from '../../hooks/useAuth';
import { saveDesign } from '../../services/holiService';

interface Props {
  templateId?: string;
  templateUrl?: string;
  onClose?: () => void;
}

const HoliEditor: React.FC<Props> = ({ templateUrl, templateId, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (canvasRef.current) {
      const c = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 800,
        backgroundColor: '#ffffff',
      });
      setCanvas(c);

      if (templateUrl) {
        fabric.Image.fromURL(templateUrl, (img) => {
          img.set({ selectable: false, evented: false });
          c.setBackgroundImage(img, c.renderAll.bind(c));
        });
      }
    }
    return () => {
      canvas?.dispose();
    };
  }, [canvasRef, templateUrl]);

  const addText = () => {
    if (!canvas) return;
    const text = new fabric.IText('Your text here', {
      left: 100,
      top: 100,
      fontFamily: 'Arial',
      fill: '#000',
      fontSize: 32,
    });
    canvas.add(text).setActiveObject(text);
  };

  const exportImage = (type: 'png' | 'jpeg') => {
    if (!canvas) return;

    // if user is free, overlay watermark object temporarily
    let watermark: fabric.Text | null = null;
    if (!user) {
      watermark = new fabric.Text('Made with Stravotech', {
        fontSize: 20,
        fill: 'rgba(255,255,255,0.7)',
        selectable: false,
        evented: false,
        originX: 'center',
        originY: 'center',
      });
      watermark.set({ left: canvas.getWidth() / 2, top: canvas.getHeight() - 30 });
      canvas.add(watermark);
    }

    const dataUrl = canvas.toDataURL({ format: type, quality: 0.9 });

    if (watermark) {
      canvas.remove(watermark);
    }

    const link = document.createElement('a');
    link.download = `holi-design.${type}`;
    link.href = dataUrl;
    link.click();

    if (user && templateId) {
      saveDesign({
        userId: user.uid,
        templateId,
        dataUrl,
        createdAt: new Date(),
      });
    }
  };

  const addImage = (file: File) => {
    if (!canvas) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      fabric.Image.fromURL(e.target?.result as string, (img) => {
        img.scaleToWidth(200);
        canvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl p-4 relative">
        <button
          className="absolute top-2 right-2 text-gray-700" onClick={onClose}
        >
          ✕
        </button>
        <div className="flex">
          <div className="flex-1">
            <canvas ref={canvasRef} className="border" />
          </div>
          <div className="w-64 pl-4 space-y-2">
            <button onClick={addText} className="btn">Add text</button>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && addImage(e.target.files[0])}
            />
            <button onClick={() => exportImage('png')} className="btn">Download PNG</button>
            <button onClick={() => exportImage('jpeg')} className="btn">Download JPG</button>
            {/* Additional controls: font size, color pickers, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoliEditor;

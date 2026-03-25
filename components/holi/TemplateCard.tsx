import React from 'react';
import { HoliTemplate } from '../../data/holiTemplates';

interface Props {
  template: HoliTemplate;
  onSelect: (template: HoliTemplate) => void;
}

const TemplateCard: React.FC<Props> = ({ template, onSelect }) => {
  return (
    <div
      className="cursor-pointer rounded overflow-hidden shadow-lg hover:scale-105 transform transition"
      onClick={() => onSelect(template)}
    >
      <img src={template.thumbnailUrl} alt={template.title} className="w-full h-48 object-cover" />
      <div className="p-2 bg-white">
        <h3 className="text-sm font-semibold">{template.title}</h3>
      </div>
    </div>
  );
};

export default TemplateCard;

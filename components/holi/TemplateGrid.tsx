import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';
import { HoliTemplate } from '../../data/holiTemplates';
import { fetchTemplates } from '../../services/holiService';
import SearchFilter from './SearchFilter';

interface Props {
  onTemplateSelect: (template: HoliTemplate) => void;
}

const TemplateGrid: React.FC<Props> = ({ onTemplateSelect }) => {
  const [templates, setTemplates] = useState<HoliTemplate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchTemplates(searchTerm, category).then(setTemplates);
  }, [searchTerm, category]);

  return (
    <div className="space-y-4">
      <SearchFilter
        search={searchTerm}
        category={category}
        onSearchChange={setSearchTerm}
        onCategoryChange={setCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {templates.map((t) => (
          <TemplateCard key={t.id} template={t} onSelect={onTemplateSelect} />
        ))}
      </div>
    </div>
  );
};

export default TemplateGrid;

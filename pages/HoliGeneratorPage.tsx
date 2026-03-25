import React, { useState } from 'react';
import TemplateGrid from '../components/holi/TemplateGrid';
import { HoliTemplate } from '../data/holiTemplates';
import HoliEditor from '../components/holi/HoliEditor';
import { useAuth } from '../hooks/useAuth';
import LoginModal from '../components/holi/LoginModal';
import SEO from '../components/SEO';

const HoliGeneratorPage: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<HoliTemplate | null>(null);
  const { user, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleSelect = (template: HoliTemplate) => {
    if (!user) {
      setShowLogin(true);
      return;
    }
    setSelectedTemplate(template);
  };

  return (
    <div className="container mx-auto py-8">
      <SEO 
        title="Holi Wishes Generator – Create Happy Holi Greetings Online | Stravotech" 
        description="Wish your friends and family a happy Holi with our custom image generator. Choose from multiple templates and share personalized Holi wishes instantly." 
        keywords="holi wishes generator, happy holi greeting maker, colorful holi images creator, holi 2026 wishes"
      />
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600 bg-gradient-to-r from-pink-300 via-yellow-300 to-green-300 py-4 rounded-lg">
        Holi Wishes Generator
      </h1>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {!selectedTemplate && (
        <TemplateGrid onTemplateSelect={handleSelect} />
      )}

      {selectedTemplate && (
        <HoliEditor
          templateId={selectedTemplate.id}
          templateUrl={selectedTemplate.thumbnailUrl}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  );
};

export default HoliGeneratorPage;

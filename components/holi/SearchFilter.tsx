import React from 'react';

interface Props {
  search: string;
  category?: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value?: string) => void;
}

const SearchFilter: React.FC<Props> = ({ search, category, onSearchChange, onCategoryChange }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2">
      <input
        type="text"
        className="border rounded px-3 py-2 w-full sm:w-1/2"
        placeholder="Search templates..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="border rounded px-3 py-2 w-full sm:w-1/4"
        value={category || ''}
        onChange={(e) => onCategoryChange(e.target.value || undefined)}
      >
        <option value="">All Categories</option>
        <option value="post">Post</option>
        <option value="story">Story</option>
        <option value="card">Card</option>
        <option value="offer">Offer</option>
      </select>
    </div>
  );
};

export default SearchFilter;

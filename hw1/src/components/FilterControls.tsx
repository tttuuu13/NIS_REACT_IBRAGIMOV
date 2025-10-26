import React, { RefObject } from 'react';
import './FilterControls.css';

interface FilterControlsProps {
  filterMode: 'all' | 'favorites';
  setFilterMode: (mode: 'all' | 'favorites') => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
  searchRef: RefObject<HTMLInputElement>;
  onSearch: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  filterMode,
  setFilterMode,
  viewMode,
  setViewMode,
  searchRef,
  onSearch,
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-buttons">
        <button
          onClick={() => setFilterMode('all')}
          className={filterMode === 'all' ? 'active' : ''}
        >
          Все
        </button>
        <button
          onClick={() => setFilterMode('favorites')}
          className={filterMode === 'favorites' ? 'active' : ''}
        >
          Только избранные
        </button>
      </div>

      <div className="search-input">
        <input
          type="text"
          placeholder="Поиск по названию"
          ref={searchRef}
          onChange={onSearch}
        />
      </div>

      <div className="view-mode-buttons">
        <button
          onClick={() => setViewMode('grid')}
          className={viewMode === 'grid' ? 'active' : ''}
        >
          Плитка
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={viewMode === 'list' ? 'active' : ''}
        >
          Список
        </button>
      </div>
    </div>
  );
};

export default FilterControls;
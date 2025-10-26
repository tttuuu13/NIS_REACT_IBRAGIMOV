import React, { useState, useRef, useMemo, useCallback } from 'react';
import { Movie, initialMovies } from './data/movies';
import MovieList from './components/MovieList';
import FilterControls from './components/FilterControls';
import './App.css';

type ViewMode = 'grid' | 'list';
type FilterMode = 'all' | 'favorites';

function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const searchRef = useRef<HTMLInputElement>(null);

  const toggleFavorite = useCallback((id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  }, []);

  const filteredMovies = useMemo(() => {
    let filtered = movies;

    if (filterMode === 'favorites') {
      filtered = filtered.filter((movie) => movie.isFavorite);
    }

    const searchTerm = searchRef.current?.value.toLowerCase() || '';
    if (searchTerm) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [movies, filterMode]);

  const handleSearch = useCallback(() => {
    setMovies([...movies]);
  }, [movies]);

  return (
    <div className="App">
      <h1>Каталог фильмов</h1>
      <FilterControls
        filterMode={filterMode}
        setFilterMode={setFilterMode}
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchRef={searchRef}
        onSearch={handleSearch}
      />
      {filteredMovies.length === 0 ? (
        <p>Фильмов нет</p>
      ) : (
        <MovieList movies={filteredMovies} viewMode={viewMode} onToggleFavorite={toggleFavorite} />
      )}
    </div>
  );
}

export default App;

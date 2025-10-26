import React from 'react';
import { Movie } from '../data/movies';
import MovieCard from './MovieCard';
import './MovieList.css';

interface MovieListProps {
  movies: Movie[];
  onToggleFavorite: (id: number) => void;
  viewMode: 'grid' | 'list';
}

const MovieList: React.FC<MovieListProps> = ({ movies, onToggleFavorite, viewMode }) => {
  return (
    <div className={`movie-list ${viewMode}`}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleFavorite={onToggleFavorite}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default MovieList;
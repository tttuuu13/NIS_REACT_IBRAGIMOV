import React from 'react';
import { Movie } from '../data/movies';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  onToggleFavorite: (id: number) => void;
  viewMode: 'grid' | 'list';
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onToggleFavorite, viewMode }) => {
  const handleFavoriteClick = () => {
    onToggleFavorite(movie.id);
  };

  return (
    <div className={`movie-card ${viewMode}`}>
      <div className="movie-poster-container">
        <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
        <button onClick={handleFavoriteClick} className="favorite-button">
          {movie.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="movie-details">
        <h3>{movie.title} ({movie.year})</h3>
      </div>
    </div>
  );
};

export default MovieCard;
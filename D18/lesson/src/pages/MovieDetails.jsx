import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  // useEffect to fetch movie details when the component mounts or when 'id' changes
  useEffect(() => {
    // Define the async function to fetch movie details from the OMDB API
    const fetchMovieDetails = async () => {
      // Fetch movie data using the id from the URL and your API key
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=8b58f05a`
      );
      const data = await response.json(); // Convert the response into JSON
      setMovie(data); // Store the fetched movie data in the state
    };

    fetchMovieDetails(); // Call the async function to initiate the fetch operation
  }, [id]); // The effect will re-run if the 'id' changes (i.e., when the route changes)

  return movie ? (
    <div className="mt-5 text-center">
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;

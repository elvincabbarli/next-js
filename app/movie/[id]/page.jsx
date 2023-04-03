import React from "react";
import MovieContainer from "@/containers/movie";
import {notFound} from 'next/navigation'
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params , searchParams }) => {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if(!movieDetail){
    notFound()
  }

  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import logo from '../common/no_image.svg';
import Movie from './MoviePage';

export default function MoviePage() {
    const [movieData, setMovieData] = useState([]);
    const { id } = useParams();
    const movieId = id;

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/' + movieId,
            params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
        };

        axios
            .request(options)
            .then(function (response) {
                setMovieData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Movie
            title={movieData.title}
            tagline={movieData.tagline}
            overview={movieData.overview}
            date={
                movieData.release_date === undefined ? ' ' : movieData.release_date.replace('-', '.').replace('-', '.')
            }
            image={
                movieData.poster_path === undefined
                    ? `url(${logo})`
                    : 'url(https://image.tmdb.org/t/p/original/' + movieData.poster_path + ')'
            }
            image2={
                movieData.poster_path === undefined
                    ? `url(${logo})`
                    : 'url(https://image.tmdb.org/t/p/w300/' + movieData.poster_path + ')'
            }
            ratings={movieData.vote_average}
            runtime={movieData.runtime}
            budget={
                movieData.budget !== undefined
                    ? movieData.budget.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                      })
                    : ''
            }
            revenue={
                movieData.revenue !== undefined
                    ? movieData.revenue.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                      })
                    : ' '
            }
        />
    );
}

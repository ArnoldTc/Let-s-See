import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import styles from './MoviePage.module.scss';
import { useParams } from 'react-router';
import CreditsData from './components/CreditsData.js';

/*
const { id } = useParams();
type MovieInfo = {
    title: string;
    tagline: string;
    overview: string;
    date: string;
    image: string;
    ratings: string;
    runtime: string;
    budget: string;
    revenue: string;
    movieId: string;
  };
  const timeConvert = (n) =>  {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
    }
const Movie: React.FC<MovieInfo> = ({ title, tagline, overview, date, image, ratings, runtime, budget, revenue, movieId, }) => (
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/' + movieId,
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };

    axios
      .request(options)
      .then(function (response) {
        setTitle(response.data.title);
        setTagline(response.data.tagline);
        setOverview(response.data.overview);
        setDate(response.data.release_date.replace("-", ".").replace("-", "."));
        setImage(response.data.poster_path);
        setRatings(response.data.vote_average);
        setRuntime(timeConvert(response.data.runtime))
        //setRuntime(parseFloat(response.data.runtime / 60).toFixed(2) + ' h');
        setBudget(response.data.budget);
        setRevenue(response.data.revenue);
        console.log(response.data);
        localStorage.setItem('path', response.data.poster_path);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})`,
      }}
    >
      <div className={styles.bgImageShadow}>
        <div className={styles.grid}>
          <Container>
            <Row>
              <Col md="4">
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w300/${image})`,
                  }}
                  className={styles.movieImage}
                />
              </Col>
              <Col md="8">
                <h1>{title}</h1>
                <h3>{tagline}</h3>
                <h5>{date}</h5>
                <br />
                <h5>{overview}</h5>
                <br />
                <h5 className={styles.movieData}>Ratings:</h5>
                <h6>{ratings}</h6>
                <h5 className={styles.movieData}>Runtime:</h5>
                <h6>{runtime}</h6>
                <h5 className={styles.movieData}>Budget:</h5>
                <h6>
                  {budget.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </h6>
                <h5 className={styles.movieData}>Revenue:</h5>
                <h6>
                  {revenue.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </h6>
              </Col>
            </Row>
            <CreditsData />
          </Container>
        </div>
      </div>
    </div>
  );
}
*/
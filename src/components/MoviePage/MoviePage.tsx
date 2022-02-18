import React from 'react';
import { Container } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import styles from './MoviePage.module.scss';
import CreditsData from './components/CreditsData.js';

type MovieInfo = {
    title: string;
    tagline: string;
    overview: string;
    date: string;
    image: string;
    image2: string;
    ratings: string;
    runtime: string;
    budget: string;
    revenue: string;
};
const Movie: React.FC<MovieInfo> = ({
    title,
    tagline,
    overview,
    date,
    image,
    image2,
    ratings,
    runtime,
    budget,
    revenue,
}) => (
    <div
        className={styles.background}
        style={{
            backgroundImage: image,
        }}
    >
        <div className={styles.bgImageShadow}>
            <div className={styles.grid}>
                <Container>
                    <Row>
                        <Col md="4">
                            <div
                                style={{
                                    backgroundImage: image2,
                                }}
                                className={styles.movieImage}
                            />
                        </Col>
                        <Col md="8">
                            <h1>{title}</h1>
                            <h3>{tagline}</h3>
                            <h5>{date}</h5>
                            <h5>{overview}</h5>
                            <h5 className={styles.movieData}>Ratings:</h5>
                            <h6>{ratings}</h6>
                            <h5 className={styles.movieData}>Runtime:</h5>
                            <h6>{runtime}</h6>
                            <h5 className={styles.movieData}>Budget:</h5>
                            <h6>{budget}</h6>
                            <h5 className={styles.movieData}>Revenue:</h5>
                            <h6>{revenue}</h6>
                        </Col>
                    </Row>
                    <CreditsData />
                </Container>
            </div>
        </div>
    </div>
);
export default Movie;

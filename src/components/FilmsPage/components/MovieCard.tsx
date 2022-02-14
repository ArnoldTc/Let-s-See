import * as React from 'react';
import { Col, Nav } from 'react-bootstrap';
import styles from './CardHandler.module.scss';

type MovieInfo = {
  id: string;
  image: string;
  title: string;
  date: number;
};

const Movie: React.FC<MovieInfo> = ({ id, image, title, date }) => (
  <Col lg="3">
    <Nav.Link href={'/movie/' + id}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Col className={styles.shadow}>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <h2 className={styles.date}>{date}</h2>
          </div>
        </Col>
      </div>
    </Nav.Link>
  </Col>
);

export default Movie;

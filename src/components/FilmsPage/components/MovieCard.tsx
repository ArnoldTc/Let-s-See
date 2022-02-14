import * as React from 'react';
import { Col, Nav } from 'react-bootstrap';
import styles from './CardHandler.module.scss';
import logo from '../common/no_image.svg';

type MovieInfo = {
  id: string;
  image: string;
  title: string;
  date: string;
};

const Movie: React.FC<MovieInfo> = ({ id, image, title, date }) => (
  <Col lg="3">
    <Nav.Link href={'/movie/' + id}>
      <div
        className={styles.card}
        style={{
          backgroundImage: image,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Col className={styles.shadow}>
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <h2 className={styles.date}>{date.replace('-', '.').replace('-', '.')}</h2>
          </div>
        </Col>
      </div>
    </Nav.Link>
  </Col>
);

export default Movie;

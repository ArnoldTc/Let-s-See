import * as React from 'react';
import { Col, Nav } from 'react-bootstrap';
import styles from './CreditsData.module.scss';


type PersonInfo = {
  backgroundImage: string;
  name: string;
  character: string;
  id: number;
};

const Person: React.FC<PersonInfo> = ({ name, backgroundImage, character, id }) => (
  <Col md="3" lg>
    <Nav.Link href={'/actor/' + id}>
      <div className={styles.castCard}>
        <div
          style={{
            height: '300px',
            width: '200px',
            backgroundImage: `url(https://image.tmdb.org/t/p/w200/${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className={styles.personCard}>
            <div className={styles.personInfo}>
              <h3 className={styles.personData}>{name}</h3>
              <h4 className={styles.personData}>{character}</h4>
            </div>
          </div>
        </div>
      </div>
    </Nav.Link>
  </Col>
);

export default Person;

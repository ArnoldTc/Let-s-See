import * as React from 'react';
import { Col, Nav } from 'react-bootstrap';
import styles from './CreditsData.module.scss';
import logo from '../../common/no_image.svg';

type PersonInfo = {
  backgroundPoster: string;
  name: string;
  character: string;
  id: number;
};

const Person: React.FC<PersonInfo> = ({ name, backgroundPoster, character, id }) => (
  <Col md="3" lg>
    <Nav.Link href={'/actor/' + id}>
      <div className={styles.castCard}>
        <div
          style={{
            height: '300px',
            width: '200px',
            backgroundImage: backgroundPoster,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
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

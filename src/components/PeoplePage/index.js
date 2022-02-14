import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import styles from './PeoplePage.module.scss';
import { useParams } from 'react-router';

export default function MoviePage(props) {
  const [name, setName] = useState();
  const [akas, setAkas] = useState();
  const [biography, setBiography] = useState();
  const [birthday, setBirthday] = useState();
  const [image, setImage] = useState();
  const [place_of_birth, setPoB] = useState();
  const { id } = useParams();
  const person_id = id;
  useEffect(() => {
    console.log('value from safe: ' + localStorage.getItem('path'));

    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/person/' + person_id,
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };

    axios
      .request(options)
      .then(function (response) {
        setName(response.data.name);
        setAkas(response.data.also_known_as[0]);
        setBiography(response.data.biography);
        setBirthday(response.data.birthday.replace("-", ".").replace("-", "."));
        setImage(response.data.profile_path);
        setPoB(response.data.place_of_birth);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${localStorage.getItem('path')})`,
      }}
    >
      <div className={styles.bgImageShadow}>
        <Container>
          <Row>
            <Col md="5">
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w400/${image})`,
                  height: '600px',
                }}
                className={styles.movieImage}
              />
            </Col>
            <Col md="7">
              <h1>{name}</h1>
              <h4>{akas}</h4>
              <h5>{birthday}</h5>
              <h5 className={styles.movieData}>Születési hely:</h5>
              <h6>{place_of_birth}</h6>
              <br />
              <h5>{biography}</h5>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Person from './person';

export default function CreditsData(props) {
  const [persons, setPersons] = useState([]);
  const { id } = useParams();
  const movieId = id;

  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/' + movieId + '/credits',
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };
    axios
      .request(options)
      .then(function (response) {
        setPersons(response.data.cast);
        console.log(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      {persons &&
        persons.slice(0, 10).map(personData => {
          return (
            <Person
              backgroundImage={personData.profile_path}
              name={personData.name}
              character={personData.character}
              id={personData.id}
            />
          );
        })}
    </Row>
  );
}

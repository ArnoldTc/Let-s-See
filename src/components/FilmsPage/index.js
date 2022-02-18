import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import styles from './FilmsPage.module.scss';
import Movie from './components/MovieCard';
import { TextField } from '@mui/material';
import logo from 'components/common/no_image.svg';

export default function FilmsPage() {
  const [filmsData, setFilmsData] = useState([]);

  var getApiRequest = title => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720', query: title },
    };

    axios
      .request(options)
      .then(function (response) {
        setFilmsData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    var options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/popular',
      params: { api_key: 'b1039975e8b3741cdafd37bbf1ab2720' },
    };

    axios
      .request(options)
      .then(function (response) {
        setFilmsData(response.data.results);
        console.log(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Container>
        <div className={styles.searchBar}>
          <TextField
            fullWidth
            autoFocus
            variant="filled"
            placeholder="Search..."
            onChange={e => getApiRequest(e.target.value)}
          />
        </div>
        <Row>
          {filmsData &&
            filmsData.slice(0, 20).map(filmData => {
              let theimage;
              if (filmData.poster_path == null) {
                theimage = `url(${logo})`;
              } else {
                theimage = `url(https://image.tmdb.org/t/p/w300/${filmData.poster_path})`;
              }
              if (filmData.release_date === undefined) {
                filmData.release_date = ' ';
              }
              return (
                <Movie
                  id={filmData.id}
                  title={filmData.title}
                  filmId={filmData.id}
                  date={filmData.release_date}
                  image={theimage}
                />
              );
            })}
        </Row>
      </Container>
    </>
  );
}

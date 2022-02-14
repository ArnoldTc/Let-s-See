import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import IndexPage from './components/IndexPage';
import './style.scss';
import MoviePage from './components/MoviePage';
import PeoplePage from './components/PeoplePage';
import Header from './components/common/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/actor/:id" element={<PeoplePage />} />
        </Routes>
      </Router>
    </>
  );
}

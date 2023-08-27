import React from 'react';
import Row from "../components/Row";
import api from '../api/api';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

const NetFlixShow = () => {
  return (
    <div>
        <Nav />
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={api.fetchNetflixOriginals} 
          isLargeRow 
        />
        <Row title="Trending Now" fetchUrl={api.fetchTrending} />
        <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
        <Row title="Documataries" fetchUrl={api.fetchDocumentaries} />
    </div>
  );
};

export default NetFlixShow;
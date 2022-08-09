import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title='Netflix Originals' isLargeRow={true}fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

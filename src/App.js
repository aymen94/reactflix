import React, { Component } from 'react';
import CardData from './component/cardData';
import Header from './component/header';


class App extends Component {
  render() {
    var date = new Date();
    var year = date.getFullYear();
    return (
      <div>
        <Header title="ReactFlix"/>
        <CardData title={`New Movies ${year}`} url={`discover/movie?with_genres=18&primary_release_year=${year}`}/>
        <CardData title="Most Popular Movies" url="discover/movie?sort_by=popularity.desc"/>
        <CardData title="Kids Movies" url="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=1"/>
        
       </div>
    );
  }
}

export default App;

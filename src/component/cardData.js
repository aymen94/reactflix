import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'nuka-carousel';
import Card from './card';
import '../style/style.css';


class CardData extends Component {
  constructor(){
    super();
     this.apiKey='&api_key=87dfa1c669eea853da609d4968d294be';
    this.urlApi='https://api.themoviedb.org/3/';
    this.state={
      data:[]
    }
  }

   fetchData(){
  
   return axios.get(`${this.urlApi}${this.props.url}${this.apiKey}`);
 
  }

  componentDidMount() {
    this.fetchData().then(d=>this.setState({data:d.data}))
  }
 

  render() {
  const data=this.state.data.results;
    if(data)
      return (
        <div>
          <h1>{this.props.title}</h1>        
          <div >
          <Carousel slidesToShow={5}  dragging={true} slidesToScroll={3} cellSpacing={5}>
            {data.map(d=><Card key={d.id} title={d.title} img={d.poster_path} data={d}/>)}
          </Carousel>
          </div>
        </div>
    );
      return null  
  }
}

export default CardData;

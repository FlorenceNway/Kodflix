import React from 'react';
import { Link } from 'react-router-dom';
import getGallery from './getGallery';


export default class Details extends React.Component{
    constructor(){
        super();
        this.state ={
            movie_name : []
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            let movieid = this.props.match.params.movieid;
            let moviename = getGallery().find(function(movie){
                return movie.id === movieid;
            }).name
            this.setState({
                movie_name: moviename
            })
        },0)
    }

    render(){
        return (
            <div>
              <h1>Welcome to {this.state.movie_name}</h1>
              <Link to='/'> Back to Home </Link>
            </div>
          );
    }
}


 
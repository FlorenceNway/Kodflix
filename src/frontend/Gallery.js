import React, { Component } from 'react';

import Movie from './Movie';
import getGallery from './getGallery';


export default class Gallery extends Component {
  render() {
    return (
      <div className="App">
        <div className='movimgs_container'> 
        
        {
            getGallery().map(movie =>(
                <Movie key={movie.id} id={movie.id} name={movie.name} img={movie.img} />
            ))
        }

        </div>
      </div>  
    )
}
}   


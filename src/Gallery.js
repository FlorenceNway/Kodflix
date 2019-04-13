import React, { Component } from 'react';

import Movie from './Movie';

import moviecover from './movie_cover.jpg';
import blackmirror from './blackmirror.jpg';
import breakingbad from './breakingbad.jpg';
import deathnote from './deathnote.jpg';
import walkngdead from './walkngdead.jpg';
import wire from './wire.jpg';


export default class Gallery extends Component {
  render() {
    return (
      <div className="App">
        <div className='movimgs_container'> 
          <Movie name='Black Mirror' img = {blackmirror} />
          <Movie name='Death Note' img = {deathnote} />
          <Movie name='Walking Dead' img = {walkngdead} />
          <Movie name='Wire' img = {wire} />
          <Movie name='Breaking Bad' img = {breakingbad} />
          <Movie name='Movie Cover' img = {moviecover} />
        </div>
      </div> 
    );
  }
}
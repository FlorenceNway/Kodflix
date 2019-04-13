import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie(props){
    return ( 
      <div className='item'> 
        <Link to="/details">
          <img src={props.img} alt={props.name} /> 
          <h1 className='title overlay'> {props.name} </h1> 
        </Link>
      </div>
    );
  };
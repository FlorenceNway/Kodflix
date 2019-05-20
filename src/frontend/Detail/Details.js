import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../getGallery';
import './Details.css';


export default class Details extends React.Component{
    constructor(){
        super();
        this.state ={
             movie: {}
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            let movieid = this.props.match.params.movieid;
            let movie = getGallery().find(function(movie){
                return movie.id === movieid;
            });
            this.setState({movie});
        },0)
    }

    render(){   
                if(this.state.movie === undefined){
                    return  <Redirect to ='/not-found'/>

                }else{
                    return(
                    <div className='Details'>
                        <h1>Welcome to {this.state.movie.name}</h1>
                        <div className = 'content'>
                            <div className ='text'>
                                <p>{this.state.movie.details}</p>
                            </div>
                            <div className = 'img'>    
                                <img src={this.state.movie.img} alt={this.state.movie.name} />
                            </div>
                        </div>
                        <Link to='/'> Back to Home </Link>
                    </div>
                    );
                 }    
            }
}


 
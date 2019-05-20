import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
        return(
            <div>
                <h1>Ooops.... this movie doesn't exit.</h1>
                <Link to='/'> Back to Home </Link>
            </div>
        );
}

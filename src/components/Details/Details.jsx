import React from 'react';
// import { useSelector } from 'react-redux';

function Details(movie){
    console.log('in details', movie);
    return (
        <main>
        <h4>{movie.title} Details:</h4>
        <div key={movie.id}>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
        </div>
        </main>
    );
}


export default Details;
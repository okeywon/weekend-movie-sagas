import React, { useEffect } from 'react';
import { useDispatch, useSelector, useState } from 'react-redux';
// import { useSelector } from 'react-redux';

function Details(movie){
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

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
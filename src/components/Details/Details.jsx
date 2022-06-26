import React from 'react';
import {useSelector} from 'react-redux';

function Details(){
    const movie = useSelector(store => store.thisMovie);
    console.log('movie received from fetchthismovie:', movie);

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
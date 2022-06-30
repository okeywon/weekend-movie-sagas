import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details(){
    const dispatch = useDispatch();
    const params = useParams();
    const genre = useSelector(store => store.genre);
    const movie = useSelector(store => store.thisMovie);
    console.log('movie received from fetchthismovie:', movie, params, genre);

    useEffect(() => {
        console.log("In useEffect")
        dispatch({ 
            type: 'FETCH_THIS_MOVIE',
            payload: Number(params.id)
        });
    }, [params.id]);
    
    
    console.log('........................', movie);
    
    return (
        <main>
        <h4>{movie.title} Details:</h4>
        <div key={movie.id}>
            <img src={movie.poster} alt={movie.title}/>
            <p>{movie.description}</p>
            <h5>Genres</h5>
            <ul>
                {movie.genres && movie.genres.map(genre => (
                   <li key = {genre.id}>{genre.name}</li> 
                ))}
            
            </ul>
        </div>
        </main>
    );
}

export default Details;
import React, { useEffect } from 'react';
import { useDispatch, useSelector, useState } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const [thisMovie, setThisMovie] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const getDetails = (movie) => {
        setThisMovie = movie;
        dispatch({
            type: "FETCH_THIS_MOVIE",
            payload: thisMovie,
          });
        console.log(thisMovie);
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}
                            onClick={() => getDetails(movie)}
                            />
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;
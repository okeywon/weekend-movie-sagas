import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const getDetails = (movie) => {
    //     dispatch({
    //         type: "FETCH_THIS_MOVIE",
    //         payload: movie,
    //       });
    //     console.log(movie);
        history.push('/movie/:id');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <Link to={`/movie/${movie.id}`}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}
                            onClick={() => getDetails(movie)}
                            />
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;
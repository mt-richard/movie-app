import React, { useEffect } from 'react';
import MovieCard from "../component/movieCard";
import MovieApi from "../component/MovieApi";
import { APIKey } from "../component/apiKey";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, getAllMovies } from '../redux/movieSlice';

const Home = () => {
    const movietxt = "harry";
    const dispatch = useDispatch();

    useEffect(() =>{
        const fetchMovie = async () => {
            const response = await MovieApi
                .get(`?apikey=${APIKey}&s=${movietxt}&type=movie`)
                .catch((err) => {
                    console.log(err);
                });
            dispatch(addMovie(response.data))
        }
        fetchMovie();
    }, [dispatch]);

    const movies = useSelector(getAllMovies);
    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div>
            <h3>{movies.Error}</h3>
        </div>
    );

    return (
        <div>
            <div className='bg-gray-700 p-4 text-gray-500'>
                <h3 className='text-xl ml-3 md:text-3xl font-black text-white py-3'>List of Movies</h3>
                <div className="container md:flex flex-wrap gap-3 justify-center">
                    {renderMovies}
                </div>
            </div>
        </div>
    );
}

export default Home;

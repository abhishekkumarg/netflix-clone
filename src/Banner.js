import React ,{useState, useEffect}from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {

    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            console.log(request.data.results[Math.floor(Math.random()*request.data.results.length)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }
    return (
        <header className='banner' style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage: `url(
                "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        }}>
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.name || movie?.title || movie?.original_name}</h1>

                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>
                </div>

                <div className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className='banner_fadeBottom'></div>

        </header>
    )
}

export default Banner

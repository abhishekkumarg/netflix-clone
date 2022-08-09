import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const baseUrl = 'http://image.tmdb.org/t/p/original/'
function Row({title,fetchUrl,isLargeRow,}) {
    const [trailerUrl, setTrailerUrl] = useState('');
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    // console.table(movies);
    const opts={
        height: "390",
        width: "100%",
        playerVars : {
            autoPlay: 1
        }
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlparams =new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlparams.get('v'));
            })
            .catch((err)=>console.log(err))
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {
                movies.map(movie => (
                    <img
                    onClick={()=>handleClick(movie)}
                    key={movie.id} className={`row_poster ${isLargeRow ? "row_posterLarge":""}`}src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))
            }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl}opts={opts}/>}
            {/* {trailerUrl && <YouTube videoId='ZIowoRA8dpw'opts={opts}/>} */}
        </div>
    )
}

export default Row

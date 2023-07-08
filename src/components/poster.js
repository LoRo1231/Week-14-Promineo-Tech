import React from 'react';
import poster from '../meangirls.jpg';


function MoviePoster(){

    return(
        <div>
            <img className='poster' src={poster} alt="Mean Girls Poster"/>
        </div>
    );
}

export default MoviePoster;
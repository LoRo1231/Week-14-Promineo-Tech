import React from 'react';
import MoviePoster from './poster';

class ReviewSidebar extends React.Component {
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4 border mt-4' id='review-sidebar'>
                        Reviews Go Here
                    </div>
                    <div className='col-8 mt-4' id='poster'>
                        <MoviePoster/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewSidebar;
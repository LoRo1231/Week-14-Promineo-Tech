import React from 'react';
import { useState } from 'react';

function AddMovieReview(props){

    const [userName, setUserName] = useState("");
    const [review, setReview] = useState("");

    const submitReview = (event) => {
        event.preventDefault(); //prevents page from refeshing after button click
        const newReviewData = {
            user: userName,
            reviewText: review
        }
        console.log(newReviewData);

        props.submitReview(newReviewData);
    }

    return(
        <div>
            <form>
                <div className='container mt-4'>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={userName} onChange={(event) => setUserName(event.target.value)}/>
                        <label>User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={review} onChange={(event) => setReview(event.target.value)}/>
                        <label>Review</label>
                    </div>
                    <div className='float-left'>
                        <button onClick={submitReview} className='btn btn-primary float-left' id='submit-rating'> Submit </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddMovieReview;

// <button onClick={function}>

//const function = (){

//}  USE ID's
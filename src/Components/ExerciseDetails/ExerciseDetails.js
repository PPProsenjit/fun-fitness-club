import React from 'react';
import './ExerciseDetails.css';
const ExerciseDetails = ({cart}) => {
    return (
        <div className='exercise-details'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <p>Exercise Time</p>
                <p>{cart}s</p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p>000s</p>
            </div>
            <button>Activity Component</button>
        </div>
    );
};

export default ExerciseDetails;
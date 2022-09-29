import React from 'react';
import './ExerciseDetails.css';
import { ToastContainer, toast } from 'react-toastify';
const ExerciseDetails = ({cart, current}) => {
    const notify = () => toast("Wow Done!");
    return (
        <div className='exercise-details'>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <p>Exercise Time</p>
                <p>{cart}s</p>
            </div>
            <div className='break-time'>
                <p>Break Time</p>
                <p>{current}</p>
            </div>
            <div>
            <button onClick={notify}>Activity Component</button>
            <ToastContainer />

            </div>
            
        </div>
    );
};

export default ExerciseDetails;
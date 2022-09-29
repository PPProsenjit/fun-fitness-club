import React from 'react';
import './Breakpoint.css'
const Breakpoint = () => {
    return (
        <div className='breakPoint'>
            <h2>Add Break Point</h2>
            <div className='btn-breakPoint'>
            <button>10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
            </div>
            
        </div>
    );
};

export default Breakpoint;
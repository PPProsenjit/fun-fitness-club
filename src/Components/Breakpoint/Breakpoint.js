import React from 'react';
import './Breakpoint.css'
const Breakpoint = ({current, setCurrent}) => {
    
    
    const localSet = (id) =>{
        localStorage.setItem('break',JSON.stringify({id}))
    }
    return (
        <div className='breakPoint'>
            <h2>Add Break Point</h2>
            <div className='btn-breakPoint'>
            <button onClick={(e)=>{setCurrent(e.target.innerText);localSet(e.target.innerText)}}>10s</button>
            <button onClick={(e)=>{setCurrent(e.target.innerText);localSet(e.target.innerText)}}>20s</button>
            <button onClick={(e)=>{setCurrent(e.target.innerText);localSet(e.target.innerText)}}>30s</button>
            <button onClick={(e)=>{setCurrent(e.target.innerText);localSet(e.target.innerText)}}>40s</button>
            </div>
            
        </div>
    );
};

export default Breakpoint;
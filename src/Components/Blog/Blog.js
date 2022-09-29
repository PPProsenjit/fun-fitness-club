import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog'>
            <h2>Important Question </h2>
            <h3>How Does react work?</h3>
            <li>
            React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM
            </li>
            <h3>Difference between state and props ?</h3>
            <ul>
                <h5><u>props</u></h5>
                <li>The Data is passed from one component to another.</li>
                <li>It is Immutable (cannot be modified).</li>
                <li>Props can be used with state and functional components.</li>
                <li>Props are read-only.</li>
                <h5><u>state</u></h5>
                <li>The Data is passed within the component only.</li>
                <li>It is Mutable ( can be modified).</li>
                <li>State can be used only with the state components/class component (Before 16.0).</li>
                <li>State is both read and write.</li>
            </ul>
            <h3>UseEffect Case</h3>
            <ul>
                <li>Running once on mount: fetch API data.</li>
                <li>Running on state change: validating input field.</li>
                <li>Running on state change: live filtering.Running on state </li>
                <li>change: trigger animation on new array value.</li>
                <li>Running on props change: update paragraph list on fetched API data update.</li>
            </ul>
            
        </div>
    );
};

export default Blog;
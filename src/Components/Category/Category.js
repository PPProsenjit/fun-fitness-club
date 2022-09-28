import React from 'react';
import './Category.css'
const Category = (props) => {
    // console.log(props.category)
    const{picture, name, about,age_gap, time} = props.category;
    return (
        <div className='category'>
            <img src={picture} alt="" />
            <h5>{name}</h5>
            <p>{about}</p>
            <h5>Age for: {age_gap}</h5>
            <h5>Time Required: {time}s</h5>
            <button className='btn-add'>Add List</button>
        </div>
    );
};

export default Category;
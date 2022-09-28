import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import './Info.css'
const Info = () => {
    const [catagories, setCatagories] = useState([]);
    
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    return (
        <div className='info-container'>
            <div className="categories-container">
                {
                    catagories.map(category => <Category
                    key={category.id}
                    category = {category}
                    ></Category>)
                }

            </div>
            <div className="information-container">
                this is info container
            </div>
        </div>
    );
};

export default Info;
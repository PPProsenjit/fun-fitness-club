import React, { useEffect, useState } from 'react';
import Breakpoint from '../Breakpoint/Breakpoint';
import Category from '../Category/Category';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
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
                <PersonalInfo></PersonalInfo>
                <Breakpoint></Breakpoint>
            </div>
        </div>
    );
};

export default Info;
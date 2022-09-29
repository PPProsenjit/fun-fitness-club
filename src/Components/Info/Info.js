import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Breakpoint from '../Breakpoint/Breakpoint';
import Category from '../Category/Category';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import './Info.css'
const Info = () => {
    const [catagories, setCatagories] = useState([]);
    const [cart, setCart] = useState(0)
    const [current, setCurrent] = useState("0s")
    
    
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCatagories(data))
        showlocal()
        
    },[])
    const showlocal =()=>{
        console.log('click');
        const localGet = localStorage.getItem('break');
        const localGetOld = JSON.parse(localGet);
        if(localGetOld){
            const local = localGetOld.id
            setCurrent(local);
        }
        else{
            return;
        }
    }

    return (
        <div>
            <div className='info-container'>
            <div className="categories-container">
                {
                    catagories.map(category => <Category
                    key={category.id}
                    category = {category}
                    cart = {cart}
                    setCart = {setCart}
                    ></Category>)
                }

            </div>
            <div className="information-container">
                <PersonalInfo></PersonalInfo>
                <Breakpoint current ={current} setCurrent={setCurrent}></Breakpoint>
                <ExerciseDetails cart = {cart}
                    setCart = {setCart}
                    current = {current}></ExerciseDetails>
            </div>
        </div>
                <Blog></Blog>
        </div>
    );
};

export default Info;
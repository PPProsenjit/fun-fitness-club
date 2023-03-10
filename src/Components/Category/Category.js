import React from 'react';
import './Category.css'
const Category = (props) => {
    // console.log(props.category)
    const {cart, setCart} = props
    const { picture, name, about, age_gap, time } = props.category;
    const btnAdd =(time)=>{
        console.log('object');
        const setTime = cart + time;
        setCart(setTime)
    }
    return (
        <div className='category'>
            <img src={picture} alt="" />
            <div className='category-info'>
                <h5>{name}</h5>
                <p>{about}</p>
                <h5>Age for: {age_gap}</h5>
                <h5>Time Required: {time}s</h5>
            </div>
            <button onClick={()=>btnAdd(time)} className='btn-add'>Add List</button>
        </div>
    );
};

export default Category;
import React from 'react';
import me from '../../images/me.jpg';
import './PersonalInfo.css';
const PersonalInfo = () => {
    return (
        <div>
            <div className='personal-info'>
                <img src={me} alt="" />
                <div className='my-info'>
                    <h3>Prosenjit Ray</h3>
                    <p><small> Dhaka,Bangladesh</small></p>
                </div>
            </div>
            <div className='other-info'>
                <h3>78 <small> kg weight</small></h3>
                <h3>5.8 <small>Height</small></h3>
                <h3>23 <small>year Age</small></h3>
                
            </div>
        </div>
    );
};

export default PersonalInfo;
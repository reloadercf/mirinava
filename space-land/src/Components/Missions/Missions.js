import React from 'react';
import Item from '../Item/Item';
import './missions.css';

const Missions = (props) => {
    console.log(props);
    return (
        <section className='containerMissions'>
            <div className='titleMissions'>
                <h2>Last Launches</h2>
            </div>
            <div className='containerItems'>
                {props.spaceLand.map((item,index) => <Item item={item} key={index}/>)}
            </div>
        </section>
    )
};

export default Missions;
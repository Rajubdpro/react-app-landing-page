import React from 'react'
import Header from './Header';

function About(props) {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et soluta aperiam omnis praesentium hic error esse eligendi recusandae quo eos iste incidunt veritatis optio accusamus numquam reprehenderit, nesciunt enim, vero voluptate reiciendis officiis ratione non!</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About
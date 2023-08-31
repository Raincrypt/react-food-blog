import React, { useContext } from 'react'

import Loader from '../Loader/Loader';
import { Context } from '../../context/context';

const About = () => {
    const {about, isAboutLoading} = useContext(Context)

    return isAboutLoading ?
    // Loading Page 
    <Loader /> 
    :
    // About Section
    (
        <section className='about'>
            <article className='about_container'>
                <div className="about_left">
                    <h2 className='title'>{about.title}</h2>
                    <p className='about_content'>{about.content}</p>
                </div>
                
                <div className='about_right'>
                    <div className="image_wrap">
                        <img src={about.aboutImage} alt="About Image" className='about_image'/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About
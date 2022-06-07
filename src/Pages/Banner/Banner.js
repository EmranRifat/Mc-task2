import React from 'react';
import './Banner.css'
import banner from '../../Assets/images/Banner1.png'
const Banner = () => {
    return (

        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-10'>
                    <h1 class="text-5xl font-bold">Aenean Facilisis Vitae</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Write to us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
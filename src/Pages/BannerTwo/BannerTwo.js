import React from 'react';
import banner2 from '../../Assets/images/Screenshot 2022-06-07 224132.png'

const BannerTwo = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner2} style={{ height: '350px', width: '700px' }} class="max-w-sm rounded-lg " />
                <div className='px-10'>
                    <h1 class="text-2xl font-bold">Nulla lobortis nunc vitae purus facilisis</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;
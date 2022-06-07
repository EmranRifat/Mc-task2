import React from 'react';

const Card = () => {
    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3  ml-px'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title font-bold">Business Solution</h2>
                    <p>We are using cookies for no reason.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title font-bold">Free project quote</h2>
                    <p>We are using cookies for no reason.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title font-bold">Nulla lobortis nunc</h2>
                    <p>We are using cookies for no reason.</p>
                </div>
            </div>
        </div>


    );
};

export default Card;
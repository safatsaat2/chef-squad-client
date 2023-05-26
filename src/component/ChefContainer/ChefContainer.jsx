import React from 'react';
import ChefCard from '../ChefCard/ChefCard';

const ChefContainer = (props) => {
    const data = props.data
    console.log(data)
    return (
        <div className='container mx-auto'>
            <h1 className='text-center my-10 text-3xl font-bold'>Our Chefs</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
                {data.map(chef => <ChefCard key={chef._id} data={chef}></ChefCard>)}
            </div>

        </div>
    );
};

export default ChefContainer;
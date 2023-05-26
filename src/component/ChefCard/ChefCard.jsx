import React from 'react';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const data = props.data;
    const { chefName, chefPic, experience, numberOfRecipes, like, _id } = data
    return (
        <div className='flex bg-orange-50 rounded-lg items-center'>
            <div className='w-1/2'>
                <LazyLoad>
                    <img className='h-full rounded-lg' src={chefPic} alt="" />
                </LazyLoad>
            </div>
            <div className='ml-5'>
                <h3 className='text-3xl font-bold pt-4'>{chefName}</h3>
                <p className='pt-4 font-semibold'>Experience: {experience}</p>
                <p className='pt-4 font-semibold'>Recipes: {numberOfRecipes}</p>
                <div className='flex items-center pt-4'>
                    <FaHeart></FaHeart>
                    <p className='ml-2'> {like}</p>
                </div>
                <Link to={`/recipepage/${_id}`}><button className='btn mt-10'>View Recipes</button></Link>

            </div>
        </div>
    );
};

export default ChefCard;
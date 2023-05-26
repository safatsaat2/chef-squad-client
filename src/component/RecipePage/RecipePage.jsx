import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipePage = () => {
    const datas = useLoaderData()
    const chef = useParams()
    const [chefData, setChefData] = useState({})
    const { chefName, chefPic, description, numberOfRecipes, like, experience } = chefData
    useEffect(() => {
        fetch(`https://chef-squad-server-safatsaat2.vercel.app/chefs/${chef.id}`)
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])
    return (
        <div className='py-14 bg-orange-50'>
            <div className='grid justify-center'>
                <div className='flex justify-around'>
                    <div>
                        <img style={{ height: '400px' }} className='rounded-lg' src={chefPic} alt="" />
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-3xl font-bold pt-4'>{chefName}</h3>
                                <p className='pt-4 font-semibold'>Experience: {experience}</p>
                                <p className='pt-4 font-semibold'>Recipes: {numberOfRecipes}</p>
                            </div>
                            <div className='flex items-center justify-end pt-4'>
                                <FaHeart></FaHeart>
                                <p className='ml-2'> {like}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className='container mx-5 my-10 text-center'> <span className='text-xl font-semibold'>Description:</span> {description}</p>
            </div>

            <div className='mt-20'>
                <h2 className='text-center text-4xl font-bold'>Recipes</h2>
                <div className='my-10'>
                    {datas.map(data => <RecipeCard key={data.id} data={data}></RecipeCard>)}

                </div>
            </div>

        </div>
    );
};

export default RecipePage;
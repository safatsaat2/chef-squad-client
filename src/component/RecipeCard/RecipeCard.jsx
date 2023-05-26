import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = (props) => {
    const { recipeName, ingredients, cookingMethod, rating } = props.data;
    console.log(recipeName)

    const [enable, setEnable] = useState(false)

    const favouritehandler = () => {
        toast.success("Added in Favourite")
        setEnable(true)
    }
    return (
        <div className='container mx-auto my-5 flex justify-center items-center'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="card w-3/4 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="font-bold text-3xl text-center mb-3">{recipeName}</h2>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h1 className='my-3 text-xl font-bold'>Ingredients</h1>
                            {ingredients.map(ingredient => <li className='font-semibold my-2'>{ingredient}</li>)}
                        </div>
                        <div>
                            <h1 className='my-3 text-xl font-bold'>Steps</h1>
                            {cookingMethod.map(cook => <li className='font-semibold my-2'>{cook}</li>)}
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <p className='font-semibold my-2'>Rating: {rating}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button disabled={enable} onClick={() => { favouritehandler() }} className='btn'><FaHeart className='mr-2'></FaHeart> Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;


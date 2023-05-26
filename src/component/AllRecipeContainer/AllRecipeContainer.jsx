import React from 'react';
import AllRecipeCard from '../AllRecipeCard/AllRecipeCard';

const AllRecipeContainer = (props) => {

    const data = props.data

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mb-20'>Feature Recipes</h2>
            <div>
                {data.map(recipe=> <AllRecipeCard data={recipe} key={recipe.id}></AllRecipeCard>).slice(0,3)}
            </div>
        </div>
    );
};

export default AllRecipeContainer;
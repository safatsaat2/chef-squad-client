import React from 'react';

const FoodNews = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold mb-20'>Food News</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-4 gap-6'>
                <div>
                    <img src="https://www.tasteofhome.com/wp-content/uploads/2023/05/Spaghetti-Bag-Smack-Hack-Via-@Nonna.Elda_.Cooks-TikTok-DH-TOH.jpg?resize=522%2C522&w=680" alt="" />
                    <a href="#"><h1 className='text-xl mt-2'>How to Open Spaghetti Bags Just Like an Italian Nonna</h1></a>
                </div>
                <div>
                    <img src="https://www.tasteofhome.com/wp-content/uploads/2023/05/12-Fast-food-desserts-composite-FT-Kristina-Vanni-for-TOH-JVedit.jpg?resize=522%2C522&w=680" alt="" />
                    <a href='#'><h1 className='text-xl mt-2'>We Went to 12 Drive-Thrus to Find the Best Fast-Food Dessert</h1></a>

                </div>
                <div>
                    <img src="https://www.tasteofhome.com/wp-content/uploads/2023/05/General-Mills-Gold-Medal-Flour-Recall-Resize-Crop-DH-TOH-Courtesy-General-Mills.jpg?resize=522%2C522&w=680" alt="" />
                    <a href='#'><h1 className='text-xl mt-2'>General Mills Issues a Nationwide Flour Recall Over Salmonella Concerns</h1></a>

                </div>
                <div>
                    <img src="https://www.tasteofhome.com/wp-content/uploads/2023/04/Getty-1332373937-Resize-Crop-DH-FHM-Bundt-Cake-Pan-Planter-Hack.jpg?resize=522%2C522&w=680" alt="" />
                    <a href='#'><h1 className='text-xl mt-2'>If You Have an Old Bundt Pan, You Can Turn It Into a Tabletop Planter—Here’s How</h1></a>

                </div>
            </div>

        </div>
    );
};

export default FoodNews;
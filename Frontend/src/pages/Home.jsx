import React, { useState } from 'react'
import { APP_NAME } from '../services/constants'
import { GiChefToque } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Home = () => {
    const [searchRecipe,setSearchRecipe] = useState('');

    

  return (
    <div className='flex-col bg-gradient-to-r from-[#b74e70] to-[#6a435c] w-screen h-full'>
        <div className='flex justify-around text-white items-center py-[1.5rem]'>
            <div className='flex text-4xl font-semibold'>
                <GiChefToque className='text-5xl animate-[shake_1s_ease-in-out_infinite]'/>
                {APP_NAME}
            </div>
            <div className='flex items-center rounded-xl h-[2.5rem] w-[30rem]'>
                <IoMdSearch className='text-2xl ml-[1rem]'/>
                <input
                className='text-white text-xl bg-transparent focus:outline-none rounded-xl placeholder:text-white h-[2.5rem] w-[28rem] pl-[0.5rem]'
                placeholder='Search your favourite Recipes and much more...'
                value={searchRecipe}
                onChange={(e) => {
                    setSearchRecipe(e.target.value)
                }}
                 />
            
                
            </div>
            <div>
                <NavLink>
                    My Profile
                </NavLink>
            </div>

        </div>

        <div className="flex flex-col items-center mt-10 pb-[4rem] px-8 text-white">
            
                {/* Heading */}
                <h1 className="text-5xl font-bold text-center mb-4">
                    Create Delicious <br />Recipes in Seconds!
                </h1>
                <p className="text-lg text-center max-w-2xl mb-8">
                    Enter your ingredients, choose your preferences, and let our AI create the perfect recipe for you.
                </p>

                {/* Search Input */}
                <div className="flex bg-white rounded-full shadow-lg p-2 w-[40rem]">
                    <input
                        type="text"
                        placeholder="Enter your Recipes name, Ingredients..."
                        className="flex-grow px-4 py-2 text-gray-500 rounded-l-full focus:outline-none"
                    />
                    <button className="bg-gradient-to-r from-[#b74e70] to-[#6a435c] hover:opacity-95 text-white px-6 py-2 rounded-full font-semibold">
                        Generate
                    </button>
                </div>

                {/* Example Prompts */}
                <div className="mt-8 bg-black/15 p-4 rounded-3xl w-[50rem]">
                    <h3 className="text-xl font-semibold mb-4">Example Prompts</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-white/30 px-4 py-2 rounded-full">Eggs, spinach, and mushrooms</span>
                        <span className="bg-white/30 px-4 py-2 rounded-full">I have tomatoes, onions, and pasta.</span>
                        <span className="bg-white/30 px-4 py-2 rounded-full">Healthy recipe with lentils, kale, and carrots.</span>
                        <span className="bg-white/30 px-4 py-2 rounded-full">Vegan recipe with quinoa, chickpeas, and bell peppers.</span>
                    </div>
                </div>

                {/* Images Section */}
                <div className="flex flex-col md:flex-wrap md:flex-row justify-center gap-4 mt-10">
                    <div className="rounded-full overflow-hidden border-2 border-white/60 w-[12rem] h-[12rem] bg-gray-800">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_b18AhX_x9OGzOALgqMRzkatTATIQB3fIww&s" alt="Chef" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-full overflow-hidden border-2 border-white/60 w-[12rem] h-[12rem] bg-gray-800">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505" alt="Food" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-full overflow-hidden border-2 border-white/60 w-[12rem] h-[12rem] bg-gray-800">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBLse5tCjzxWQ09YDasewXOWycugsF8SWJOrotP3EMs1Rsftixj964xDf6PhEzvy5L7s&usqp=CAU" alt="Kitchen" className="object-cover w-full h-full" />
                    </div>
                    <div className="rounded-full overflow-hidden border-2 border-white/60 w-[12rem] h-[12rem] bg-gray-800">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGzdAAVk-hWr2xJ70eurv8eNVNJkKb23nfg&s" alt="Ingredients" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
            <div className='bg-white flex flex-col items-center pt-[3.8rem] text-gray-700'>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl font-bold'>How it works</p>
                    <p className='pt-[1.3rem] pb-[2rem]'>Generate Delicious recipes in few simple steps!</p>
                </div>
            </div>
    </div>
  )
}

export default Home
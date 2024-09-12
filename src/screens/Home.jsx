import React from 'react';
import Header from '../componet/Header'
import { MdMovieEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcIdea } from "react-icons/fc";
import AddButton from '../componet/AddButton';

function Home() {
  return (
    <>
      <div className="app">
        <Header />

        <div className='home-heading-container md:flex p-4'>

          <div className='flex-1 bg-white p-4 rounded shadow'>
            <h2 className='text-2xl font-serif m-2'>Personal Growth & Well-being</h2>
            <hr />
            <p className='flex font-serif m-2 text-sm'><FcIdea /> <Link to={"/personalgrowth"}>Skill Development</Link> </p>
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Diet Plan</p>
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Workout/Exercise</p>

          </div>

          <div className='flex-1 bg-white p-4 rounded shadow'>
            <h2 className='text-2xl font-serif m-2'>Productivity & Planning</h2>
            <hr />
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Content Creation</p>
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Books Reading</p>
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Reminders</p>


          </div>

          <div className='flex-1 bg-white p-4 rounded shadow'>
            <h2 className='text-2xl font-serif m-2'>Personal Interests & Goals</h2>
            <hr />
            <p className='flex font-serif m-2 text-sm'><FcIdea /> Wishlist</p>


          </div>
        </div>
      </div>
    
    <AddButton/>


      <div className="footer p-4 bg-gray-100">
        <footer>
          <p className='paragraph font-serif text-center'>
            Your professional success and quality of life directly depend on your ability to manage the information around you
          </p>
        </footer>
      </div>

    </>
  );
}

export default Home;
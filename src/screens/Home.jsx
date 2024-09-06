import React from 'react';
import Header from '../componet/Header';
import { MdMovieEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FcIdea } from "react-icons/fc";



function Home() {

  return (
    <div className="app">
      <Header />
    
      <div className='home-heading-container'>

        <div className='flex-1'>
          <h2 className='text-2xl font-serif m-2'>  Personal Growth & Well-being  </h2> <hr />
          <p className='flex font-serif m-2 text-sm' > <FcIdea/> Skill Development</p>
          <p className='flex font-serif m-2 text-sm'> <FcIdea/> Diet Plan</p>
          <p className='flex font-serif m-2 text-sm'> <FcIdea/> Workout/Exercise</p>

          <Link to={"/personalgrowth"}>

            <button className='home-button flex font-serif items-center'> < MdMovieEdit/> View All</button>
          </Link>

        </div>


        <div className='flex-1'>
          <h2 className='text-2xl font-serif m-2'>Productivity & Planning</h2> <hr />
          <p className='flex font-serif m-2 text-sm '> <FcIdea/> Content Creation</p>
          <p className='flex font-serif m-2 text-sm'> <FcIdea/> Books Reading</p>
          <p className='flex font-serif m-2 text-sm'> <FcIdea/> Reminders</p>
          <Link to={"/productivityplanning"}>
            <button className='home-button flex font-serif items-center'><MdMovieEdit/>View All</button>
          </Link>
        </div>



        <div className='flex-1'>
          <h2 className='text-2xl font-serif m-2'> Personal Interests & Goals</h2> <hr />
          <p className='flex font-serif m-2 text-sm'> <FcIdea/> Wishlist </p>
          <Link to={"/intrestgoals"}>

            <button className='home-button flex font-serif' items-center><MdMovieEdit />View All</button>
          </Link>



        </div>


      </div>
      <div className="footer">
        <footer >
          <p className='paragragph font-serif'>Your professional success and quality of life directly depend on your ability to manage the information around you</p>
        </footer>
      </div>
    </div>
  )
}

export default Home


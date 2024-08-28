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
          <h2>  Personal Growth & Well-being  </h2> <hr />
          <p > <FcIdea className='home-icon' /> Skill Development</p>
          <p > <FcIdea className='home-icon' /> Diet Plan</p>
          <p > <FcIdea className='home-icon' /> Workout/Exercise</p>

          <Link to={"/personalgrowth"}>

            <button className='home-button'><MdMovieEdit className='home-icon' />View All</button>
          </Link>

        </div>


        <div className='flex-1'>
          <h2>Productivity & Planning</h2> <hr />
          <p > <FcIdea className='home-icon' /> Content Creation</p>
          <p > <FcIdea className='home-icon' /> Books Reading</p>
          <p > <FcIdea className='home-icon' /> Reminders</p>
          <Link to={"/productivityplanning"}>
            <button className='home-button'><MdMovieEdit className='home-icon' />View All</button>
          </Link>
        </div>



        <div className='flex-1'>
          <h2> Personal Interests & Goals</h2> <hr />
          <p > <FcIdea className='home-icon' /> Wishlist </p>
          <Link to={"/intrestgoals"}>

            <button className='home-button'><MdMovieEdit className='home-icon' />View All</button>
          </Link>



        </div>


      </div>
      <div className="footer">
        <footer >
          <p className='paragragph'>Your professional success and quality of life directly depend on your ability to manage the information around you</p>
        </footer>
      </div>
    </div>
  )
}

export default Home


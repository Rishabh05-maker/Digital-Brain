import React, { useState } from 'react';
import Header from '../componet/Header';
import { FcIdea } from "react-icons/fc";
import AddButton from '../componet/AddButton';


function Home() {
  const [categories, setCategories] = useState([]);

  
  const addCategory = (newCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

 
  const addSubcategory = (categoryIndex) => {
 
    const subcategoryName = prompt('Enter new subcategory:');


    if (subcategoryName && subcategoryName.trim() !== '') {
      setCategories(prevCategories => 
        prevCategories.map((category, index) => {
          if (index === categoryIndex) {
  
            return {
              ...category,
              subcategories: [...category.subcategories, subcategoryName.trim()],
            };
          }
          return category;
        })
      );
    }
  };

  return (
    <>
      <div className="app">
        <Header />

        <div className='home-heading-container grid md:grid-cols-3 grid-flow-row p-4'>
          {categories.map((category, index) => (
            <div key={index} className='flex-1 bg-white p-4 rounded shadow'>
              <h1 className='text-2xl font-serif m-2'>
                {category.category}
                <button 
                  onClick={() => addSubcategory(index)} 
                  className='border text-sm p-1 m-1 bg-cyan-300'
                >
                  Add Subcategory
                </button>
              </h1>
              <hr />
              {category.subcategories.map((subcategory, subIndex) => (
                <p key={subIndex} className='flex font-serif m-2 text-sm'>
                  <FcIdea /> {subcategory}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AddButton addCategory={addCategory} />

      <div className="footer p-4 bg-gray-100">
        <footer>
          <p className='paragraph font-serif text-sm text-center'>
            Your professional success and quality of life directly depend on your ability to manage the information around you.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Home;

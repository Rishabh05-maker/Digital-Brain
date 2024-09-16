import React, { useEffect, useState } from 'react';
import Header from '../componet/Header';
import { FcIdea } from "react-icons/fc";
import AddButton from '../componet/AddButton';
import { GrChapterAdd } from "react-icons/gr";
import { useGetAllcategoryQuery, useGetSubcategoryQuery, useSubcategoryMutation } from '../redux/Service';



function Home() {
  const [categories, setCategories] = useState([]);
  const {data: subcategoryName} = useGetAllcategoryQuery()
  const { data: name, error, isLoading } = useGetAllcategoryQuery();
  const [subcategory] = useSubcategoryMutation();


  console.log("hello", subcategoryName)
    

  useEffect(() => {
    if (name) {
      console.log('Fetched Data:', name);  
      if (name.status === 'OK') {
        setCategories(name.data);  
      }
    }
  }, [name]);

  const addCategory = (newCategory) => {
    setCategories(prevCategories => [...prevCategories, newCategory]);
  };

  const addSubcategory = async (categoryIndex) => {
    const subcategoryName = prompt('Enter new subcategory:');
    if (subcategoryName && subcategoryName.trim() !== '') {
      const categoryId = categories[categoryIndex]._id;

    
      try {
        const response = await subcategory({ subcategoryName: subcategoryName.trim(), categoryId }).unwrap();
        console.log('Subcategory Response:', response);  

        if (response.status) {
        
          setCategories(prevCategories =>
            prevCategories.map((category, index) => {
              if (index === categoryIndex) {
                return {
                  ...category,
                  subcategories: [...(category.subcategories || []), response.data.subcategoryName],
                };
              }
              return category;
            })
          );
        } else {
          alert('Failed to add subcategory');
        }
      } catch (err) {
        console.error('Error adding subcategory:', err);
      }
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories.</p>;

  console.log('Categories in UI:', categories);

  return (
    <>
      <div className="app">
        <Header />
        <div className='home-heading-container grid md:grid-cols-3 grid-flow-row p-4'>
          {categories.map((category, index) => (
            <div key={category._id} className='flex-1 bg-white p-4 rounded shadow'>
              <h1 className='text-2xl font-serif m-2'>
                {category.categoryName}
                <button
                  onClick={() => addSubcategory(index)}
                  className='border text-sm p-1 m-1 bg-cyan-300'
                >
                  <GrChapterAdd />
                </button>
              </h1>
              <hr />
              {category.subcategories?.map((subcategory, subIndex) => (
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

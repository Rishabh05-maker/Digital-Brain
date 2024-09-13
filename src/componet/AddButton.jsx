import React, { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import { useCategoryMutation, useSubcategoryMutation } from '../redux/Service';

const AddButton = ({ addCategory }) => {
  const [showForm, setShowForm] = useState(false);
  const [category] = useCategoryMutation();
  const [subcategory] = useSubcategoryMutation();

  const handleFormSubmit = (values, { resetForm }) => {
    if (values.categoryName.trim() !== '') {
      const newCategory = {
        category: values.categoryName,
        subcategories: values.subcategories.filter((sub) => sub.trim() !== ''),
      };
      addCategory(newCategory);
      resetForm();
      setShowForm(false);
    }

    category(values).then((res) => {
      console.log(res);
    });

    subcategory(values).then((res) => {
      console.log(res);
    });

    
  };

  return (
    <div className="p-4 mb-5">
      <button
        onClick={() => setShowForm(!showForm)}
        className="text-white border rounded-full bg-pink-500 w-[60px] h-[60px] text-2xl flex items-center justify-center"
      >
        +
      </button>
      {showForm && (
        <Formik
          initialValues={{
            categoryName: '',
            subcategories: [''],
          }}
          onSubmit={handleFormSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="mt-4 w-[25%] bg-white p-4 rounded shadow">
              <h3 className="font-serif text-sm mb-2">Add New Category</h3>
              <input
                type="text"
                name="categoryName"
                placeholder="Category Name"
                className="border p-2 mb-2 w-full text-sm rounded"
                value={values.categoryName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <h4 className="font-serif text-sm mb-2">Subcategories</h4>
              <FieldArray name="subcategories">
                {({ push, remove }) => (
                  <>
                    {values.subcategories.map((sub, index) => (
                      <div key={index}>
                        <input
                          type="text"
                          name={`subcategories[${index}]`}
                          placeholder={`Subcategory ${index + 1}`}
                          className="border text-sm p-2 mb-2 w-full rounded"
                          value={sub}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push('')}
                      className="text-blue-500 mt-2 text-sm"
                    >
                      Add Subcategory
                    </button>
                  </>
                )}
              </FieldArray>
              <button
                type="submit"
                className="block w-full bg-green-500 text-white mt-4 rounded"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default AddButton;

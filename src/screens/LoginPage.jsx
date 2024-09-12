import { Formik } from 'formik';
import React from 'react';
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useLoginMutation } from '../redux/Service';

const RegistrationSchema = yup.object().shape({
  userName: yup.string().min(5).required(),
  password: yup.string().min(8).required(),
})

const LoginPage = () => {

const [login] = useLoginMutation()
const navigate = useNavigate()







  return (
    <div className=" backgraund min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Formik
        initialValues={{
          userName: '',
          password: '',
        }}
        validationSchema={RegistrationSchema}

        onSubmit={(values, { setSubmitting }) => {

          login(values).then((res)=>{

            const authToken = res.data.data.token

            localStorage.setItem("authToken", authToken)

            if (authToken){
                            
              navigate("/home")
          }

          })
          setSubmitting(false);

        }}
      >
        {({ values, errors, handleChange, handleBlur, isSubmitting, touched, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
                <FaUserEdit className="inline-block mr-2" /> Username
              </label>
              <input
                type="text"
                className="input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="USERNAME"
              />
              {touched.userName && errors.userName && <span className="text-red-500 text-sm">{errors.userName}</span>}
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                <RiLockPasswordFill className="inline-block mr-2" /> Password
              </label>
              <input
                type="password"
                className="input block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="PASSWORD"
              />
              {touched.password && errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="button w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign In

            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account? <Link to={"/registration"} className="text-indigo-600 hover:text-indigo-500">Create Account</Link>
            </p>
          </form>
        )}
      </Formik>

      <p className="mt-8 text-center text-gray-600">Organize Your Digital Life and Unlock Your Creative Potential</p>
    </div>
  );
}

export default LoginPage

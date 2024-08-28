import { Formik } from 'formik';
import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill, } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as yup from 'yup'

const RagistrationSchema = yup.object().shape({
    username: yup.string().min(5).required(),
    password: yup.string().min(8).required(),
})







const LoginPage = () => {








    return (
        <>
            <div className='backgraund'>
                <Formik
                    initialValues={{
                        name: '',
                        username: '',
                        password: '',
                        confirmPassword: ''


                    }}
                    validationSchema={RagistrationSchema}
                    onSubmit={(values, { setSubmitting }) => {

                    }
                    }

                >





                    {({ values, errors, handleChange, handleBlur, isSubmitting, touched, handleSubmit }) => (


                        <form onSubmit={handleSubmit}>
                            <div className='ragistration-container'>
                                <div>
                                    <h2>Login</h2>
                                    <label htmlFor=""> <FaUserEdit /> </label>
                                    <input type="text"
                                        className='input'
                                        name='username'
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='USERNAME' /> <br />
                                    <span>{touched.username && errors.username}</span>
                                </div>

                                <div>
                                    <label htmlFor=""> <RiLockPasswordFill /> </label>
                                    <input type="password"
                                        className='input'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='PASSWORD' /> <br />
                                    <span>{touched.password && errors.password}</span>
                                </div>

                                <button className='button' type='submit' disabled={isSubmitting}> <Link to={"/home"}> Sign In</Link></button>
                                <p>Don't Have An Account? <Link to={"/ragistration"}> Create Account </Link></p>
                            </div>
                        </form>
                    )}
                </Formik>

                <p className='paragragph'>Organize Your Digital Life and Unlock Your Creative Potential</p>
            </div>
        </>
    )
}

export default LoginPage

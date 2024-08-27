import { Formik } from 'formik';
import React from 'react'
import { FaUserAlt, FaUserEdit } from "react-icons/fa";
import { ImCheckboxChecked } from 'react-icons/im';
import { RiLockPasswordFill, } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import * as yup from 'yup'

const RagistrationSchema = yup.object().shape({
    name: yup.string().min(2).max(20).required(),
    username: yup.string().min(5).required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')],).required()
})






const Ragistration = () => {








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
                                    <h2>Ragistration</h2>
                                    <label htmlFor=""> <FaUserAlt /> </label>
                                    <input type="text"
                                        name='name'
                                        className='input'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='NAME' /> <br />
                                    <span>{touched.name && errors.name}</span>
                                </div>
                                <div>
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
                                        name='password'
                                        className='input'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='PASSWORD' /> <br />
                                    <span>{touched.password && errors.password}</span>
                                </div>

                                <div>
                                    <label htmlFor="">  <ImCheckboxChecked /> </label>
                                    <input type="password"
                                        className='input'
                                        name='confirmPassword'
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='CONFIRM PASSWORD' /> <br />
                                    <span>{touched.confirmPassword && errors.confirmPassword}</span>
                                </div>

                                <button type='submit' disabled={isSubmitting} >Create Account</button>
                                <p>Already Have An Account? <Link to={"/login"}> Sign In </Link></p>
                            </div>
                        </form>
                    )}
                </Formik>

                <p className='paragragph'> A new way of organizing our digital lives and improving our productivity</p>
            </div>
        </>
    )
}

export default Ragistration

import React from 'react'
import {  useFormik } from 'formik'

function Formth() {

    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password: ''
        },
        onSubmit : values => {
            console.log('Form data',values);
        },
        validate : values => {
            let errors = {}

            if(!values.name){
                errors.name='Reuired'
            }

            if(!values.email){
                errors.email='Reuired'
            }

            if(!values.password){
                errors.password='Reuired'
            }

            return errors
        }
    })

    // console.log('values are' ,formik.values);

  return (
    <>
        <h1>Basic Form First</h1> 
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password'onChange={formik.handleChange} value={formik.values.password}/>

            <button type='submit'>Submit</button>
        </form>   
    </>
  )
}

export default Formth
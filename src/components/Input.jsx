import {useState} from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'

const Input = () => {
     const onSubmit = (e)=>{
        e.preventDefault();  
    }
    const Basicschema = yup.object().shape({
        Email:yup.string().email('please enter a valid email').required('required'),
        phone:yup.number().min(3).max(11,'too much').required('required'),
        name:yup.string().required('required')
    })
    const Formik = useFormik({
        initialValues:{
             name: '',
             phone: '',
             Email: '',
        },validationSchema:Basicschema,onSubmit
    })
    console.log(Formik)
    const[error,setError] =useState('')
  return (
    <form onSubmit={Formik.handleSubmit} className="personal-info">
        <div className="input-box">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='e.g Stephen King' name='name' value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} required/> 
            {Formik.errors.name && Formik.touched.name && <p>{Formik.errors.name}</p>}      
        </div>
        <div className="input-box">
            <label htmlFor="email-address">Email Address</label>
            <input type="text" placeholder='e.g Stephenking@gmail.com' name='Email' value={Formik.values.Email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} required/>
            {Formik.errors.Email && Formik.touched.Email && <p>{Formik.errors.Email}</p>}       
        </div>
        <div className="input-box">
            <label htmlFor="phone">phone</label>
            <input type="text" placeholder='e.g +1 234 567 8940' name='phone' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur} required /> 
            {Formik.errors.phone && Formik.touched.phone && <p>{Formik.errors.phone}</p>}      
        </div>
        
</form>
  )
}

export default Input
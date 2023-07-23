import {useState} from 'react'
import Button from './Button'
import Header from './Header'
import Input from './Input'
import Steps from './Steps'

const Form = ({children}) => {
    
    
  return (
    <div className='form'>
        <div className="container form-container">
          {children}
        </div>
        
    </div>
  )
}

export default Form
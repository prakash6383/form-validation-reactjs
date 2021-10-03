import React from 'react'
import FormSignup from './FormSignup'
import "./Form.css"

const Form = () => {
  return (
    <>
      <div className="form-container">
        <span className="close-btn">X</span>
        <div className="form-content-left">
          <img
            src="https://adwebs.com.ar/wp-content/uploads/2015/01/fusee.png"
            alt="left"
            className="form-img"
          />
        </div>
        <FormSignup />

      </div>
    </>


  )
}

export default Form

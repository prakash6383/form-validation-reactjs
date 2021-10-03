import React, { useState } from 'react'

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })
    const [errors, setErrors] = useState({})

    const handlechange = (e) => {

        const { name, value } = e.target;

        setValues((prevValues) => {
            return {
                ...prevValues,
                [name]: value,
            }
        })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();

        setErrors(validate(values));
    }

    return{handlechange,values,handleSubmit, errors}

}

export default useForm

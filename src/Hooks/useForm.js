import React, { useState } from 'react';
import { omit } from 'lodash';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const useForm = (callback) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {

        switch (name) {
            case 'fname':
                if (!new RegExp(/^[A-Za-z][A-Za-z0-9_]{4}$/).test(value)) {
                    setErrors({
                        ...errors,
                        fname: 'Firstname should atleast have 5 letter & should not contain special characters'
                    })
                } else {
                    let newObj = omit(errors, "fname");
                    setErrors(newObj);
                }
                break;

            case 'lname':
                if (!new RegExp(/^[A-Za-z][A-Za-z0-9_]{1}$/).test(value)) {
                    setErrors({
                        ...errors,
                        lname: 'Lastname should not contain special characters'
                    })
                } else {
                    let newObj = omit(errors, "lname");
                    setErrors(newObj);
                }
                break;

            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;

            case 'phoneno':
                if (
                    value.length < 10
                ) {
                    setErrors({
                        ...errors,
                        password: 'Enter your 10-digit mobile number'
                    })
                } else {

                    let newObj = omit(errors, "phoneno");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }


    const handleChange = (event) => {
        event.preventDefault();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        setValues({
            ...values,
            [name]: val,
        })

    }

    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            alert("There is an Error!");
        }

        axios.post(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            alert("User Created Successfully");
            navigate("/joblists");
        })
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;
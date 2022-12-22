import React, { useState } from "react";
import { Form, Input, TextArea, Grid, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { omit } from 'lodash';

import Header from '../Components/Header';
import Contact_Us from '../Images/contact_us.png';

const ContactUs = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.post(`https://jsonplaceholder.typicode.com/users`).then(res => {
            console.log(res);
            alert("User Created Successfully");
            navigate("/contactus");
        })
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

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {

        switch (name) {
            case 'name':
                if (!new RegExp(/^[A-Za-z][A-Za-z0-9_]{4}$/).test(value)) {
                    setErrors({
                        ...errors,
                        name: 'Firstname should atleast have 5 letter & should not contain special characters'
                    })
                } else {
                    let newObj = omit(errors, "name");
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

            case 'phone':
                if (
                     !new RegExp(/^\+?[1-9][0-9]{7,14}$/)
                ) {
                    setErrors({
                        ...errors,
                        phone: 'Enter your 10-digit mobile number'
                    })
                } else {

                    let newObj = omit(errors, "phone");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }
    return (
        <>
            <Header />
            <br />
            <Grid divided='vertically'>
                <Grid.Row columns={2} 
                style={{ margin: '20px 100px 50px', borderStyle: 'groove', borderWidth: '2px', 
                boxShadow: '10px 10px 7px -9px #c9bfbf' }}>
                    <Grid.Column>
                        <h2><b>GET IN TOUCH</b></h2><br />
                        <Form onSubmit={handleSubmit}>
                            <Form.Field inline>
                                <label>Name</label>
                                <Input name='name' style={{ width: '22rem' }} onChange={handleChange} />
                                {
                                    errors.name && <p style={{color: 'red'}}>{errors.name}</p>
                                }
                            </Form.Field>
                            <Form.Field inline>
                                <label>Email</label>
                                <Input name='email' style={{ width: '22rem' }} onChange={handleChange} />
                                {
                                    errors.email && <p style={{color: 'red'}}>{errors.email}</p>
                                }
                            </Form.Field>
                            <Form.Field inline>
                                <label>Phone</label>
                                <Input name='phone' style={{ width: '22rem' }} onChange={handleChange} />
                                {
                                    errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>
                                }
                            </Form.Field>
                            <Form.Field inline >
                                <label>Message</label>
                                <TextArea style={{ width: '22rem' }} />
                            </Form.Field>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Image style={{paddingTop: '60px'}} src={Contact_Us} size='big' />
                    </Grid.Column>

                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon name='facebook square' style={{ fontSize: '3em', paddingLeft: '200px' }} />
                            <Icon name='linkedin square' style={{ fontSize: '3em', paddingLeft: '60px' }} />
                            <Icon name='twitter square' style={{ fontSize: '3em', paddingLeft: '60px' }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid.Row>
            </Grid>
        </>
    )
}

export default ContactUs;
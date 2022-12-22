import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';

import Header from '../Components/Header';
import useForm from '../Hooks/useForm';

const ApplyforJob = () => {

    const formLogin = () => {
        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    }


    const { handleChange, values, errors, message, handleSubmit } = useForm(formLogin);

    return (
        <>
            <Header />
            <div className='ui container grid' >
                <div className='ui fluid card' style={{ padding: '4rem', marginTop: '10px' }}>
                    <Form onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='column'>
                                <Form.Group>
                                    <Form.Input label='First name' name='fname' placeholder='First Name'
                                        onChange={handleChange} width={6} required
                                    />
                                    {
                                        errors.fname && <p>{errors.fname}</p>
                                    }

                                    <Form.Input label='Middle Name' name='mname' placeholder='Middle Name'
                                        width={6} />
                                    <Form.Input label='Last Name' name='lname' placeholder='Last Name'
                                        width={6} required />
                                </Form.Group>
                            </div>

                            <div className='column'>
                                <Form.Group>
                                    <Form.Input label='Email' name='email' placeholder='e.g. abc@gmail.com' width={6}
                                        onChange={handleChange} required />
                                    {
                                        errors.email && <p>{errors.email}</p>
                                    }

                                    <Form.Input label='Phone no' name='phoneno' placeholder='enter your contact number'
                                        onChange={handleChange} width={6} required />
                                    {
                                        errors.phoneno && <p>{errors.phoneno}</p>
                                    }
                                </Form.Group>
                            </div>

                            <div className='column'>
                                <Form.Group>
                                    <Form.Input label='Address 1' name='add1' placeholder='flatno/house no' width={6} />
                                    <Form.Input label='Address 2' name='add2' placeholder='enter your address' width={6} />
                                </Form.Group>
                            </div>

                            <div className='column'>

                                <Form.Group>
                                    <Form.Input label='Total Experience (in years)' name='exp' width={6} required />
                                    <Form.Input label='Relevant Experience' name='rexp' width={6} required />
                                </Form.Group>
                            </div>
                        </div>

                        <button type='submit' className='btn btn-primary'>Submit</button>
                        {
                            errors.length === 0 && <Message success
                                header='Fetched Name' /> 
                        }
                    </Form>

                </div>
            </div>
        </>
    )
}

export default ApplyforJob;
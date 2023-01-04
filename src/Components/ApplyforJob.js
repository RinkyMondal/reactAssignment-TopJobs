import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

import Header from '../Components/Header';

class ApplyforJob extends React.Component {
    state = {
        fname: "",
        mname: "",
        lname: "",
        email: "",
        phoneno: "",
        add1: "",
        add2: "",
        exp: "",
        rexp: "",
        isError: {
            fname: '',
            email: '',
            phoneno: ''
        }
    };

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "fname":
                isError.fname =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "phoneno":
                isError.phoneno =
                    value.length < 10 ? "Enter valid phone number" : "";
                break;
            default:
                break;
        }
        this.setState({ isError, [name]: value });

    }
    formValid = ({ isError, ...rest }) => {
        let isValid = false;
        Object.values(isError).forEach(val => {
            if (val.length > 0) {
                isValid = false
            } else {
                isValid = true
            }
        });
        Object.values(rest).forEach(val => {
            if (val === null) {
                isValid = false
            } else {
                isValid = true
            }
        });
        return isValid;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.formValid(this.state)) {
            fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state),
                id: Math.random().toString(36).slice(2),
            })
                .then(
                    this.setState({
                        fname: "",
                        mname: "",
                        lname: "",
                        email: "",
                        phoneno: "",
                        add1: "",
                        add2: "",
                        exp: "",
                        rexp: "",
                    })
                );
            console.log(this.state);
        } else {
            console.log("Form is invalid!");
        }

    }

    render() {
        const { isError } = this.state;
        return (
            <>
                <Header />

                <div className='ui container grid' >
                    <h4 style={{ paddingTop: '20px', fontFamily: 'fantasy' }}>Apply for Job</h4>
                    <div className='ui fluid card' style={{ padding: '4rem', marginTop: '10px' }}>

                        <Form onSubmit={this.handleSubmit}>

                            <div className='row'>
                                <div className='column'>

                                    <Form.Group>
                                        <Form.Input label='First name' name='fname' value={this.state.fname}
                                            placeholder='First Name'
                                            onChange={this.handleChange} width={6} required
                                        />
                                        {
                                            isError.fname && <p style={{ color: 'red', paddingTop: '25px' }}>{isError.fname}</p>
                                        }

                                        <Form.Input label='Middle Name' name='mname'
                                            value={this.state.mname} placeholder='Middle Name'
                                            onChange={this.handleChange}
                                            width={6} />
                                        <Form.Input label='Last Name' name='lname' value={this.state.lname}
                                            onChange={this.handleChange}
                                            placeholder='Last Name'
                                            width={6} />

                                    </Form.Group>
                                </div>

                                <div className='column'>
                                    <Form.Group>
                                        <Form.Input label='Email' name='email'
                                            value={this.state.email} placeholder='e.g. abc@gmail.com' width={6}
                                            onChange={this.handleChange} required />
                                        {
                                            isError.email && <p style={{ color: 'red', paddingTop: '25px' }}>{isError.email}</p>
                                        }

                                        <Form.Input label='Phone no' name='phoneno' value={this.state.phoneno}
                                            placeholder='enter your contact number'
                                            onChange={this.handleChange} width={6} required />
                                        {
                                            isError.phoneno && <p style={{ color: 'red', paddingTop: '25px' }}>{isError.phoneno}</p>
                                        }
                                    </Form.Group>
                                </div>

                                <div className='column'>
                                    <Form.Group>
                                        <Form.Input label='Address 1' name='add1'
                                            value={this.state.add1} placeholder='flatno/house no'
                                            onChange={this.handleChange} width={6} />
                                        <Form.Input label='Address 2' name='add2'
                                            value={this.state.add2} placeholder='enter your address'
                                            onChange={this.handleChange} width={6} />
                                    </Form.Group>
                                </div>

                                <div className='column'>

                                    <Form.Group>
                                        <Form.Input label='Total Experience (in years)' name='exp'
                                            value={this.state.exp} onChange={this.handleChange} width={6} required />
                                        <Form.Input label='Relevant Experience' name='rexp'
                                            value={this.state.rexp} onChange={this.handleChange} width={6} required />
                                    </Form.Group>
                                </div>
                            </div>

                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </Form>

                    </div>
                </div>
            </>
        )
    }

}

export default ApplyforJob;
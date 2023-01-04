import React from "react";
import { Form, Input, TextArea, Grid, Image, Icon } from 'semantic-ui-react';

import Header from '../Components/Header';
import Contact_Us from '../Images/contact_us.png';

class ContactUs extends React.Component {
    state = {
        fname: "",
        email: "",
        phone: "",
        message: "",
        isError: {
            fname: '',
            email: '',
            phone: ''
        }
    };


    //handling button clicks
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let isError = { ...this.state.isError };
        //checking validations
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
            case "phone":
                isError.phone =
                    value.length < 10 ? "Enter valid phone number" : "";
                break;
            default:
                break;
        }
        this.setState({ isError, [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.formValid(this.state)) {
            fetch("http://localhost:3001/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state),
            })
                .then(
                    this.setState({
                        fname: "",
                        email: "",
                        phone: "",
                        message: ""
                    })
                );
        } else {
            console.log("Form is invalid!");
        }

    }

    //checking for is valid or not
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

    render() {
        const { isError } = this.state;
        return (
            <>
                <Header />
                <br />
                <Grid divided='vertically'>
                    <Grid.Row columns={2}
                        style={{
                            margin: '20px 100px 50px', borderStyle: 'groove', borderWidth: '2px',
                            boxShadow: '10px 10px 7px -9px #c9bfbf'
                        }}>
                        <Grid.Column>
                            <h2><b>GET IN TOUCH</b></h2><br />
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field inline>
                                    <label>Name</label>
                                    <Input name='fname'
                                        value={this.state.fname}
                                        style={{ width: '22rem' }}
                                        onChange={this.handleChange}
                                        required />
                                    {
                                        isError.fname && <p style={{ color: 'red' }}>{isError.fname}</p>
                                    }
                                </Form.Field>

                                <Form.Field inline>
                                    <label>Email</label>
                                    <Input name='email'
                                        value={this.state.email}
                                        style={{ width: '22rem' }}
                                        onChange={this.handleChange} required />
                                    {
                                        isError.email && <p style={{ color: 'red' }}>{isError.email}</p>
                                    }

                                </Form.Field>
                                <Form.Field inline>
                                    <label>Phone</label>
                                    <Input name='phone'
                                        value={this.state.phone}
                                        style={{ width: '22rem' }}
                                        onChange={this.handleChange} required />
                                    {
                                        isError.phone && <p style={{ color: 'red' }}>{isError.phone}</p>
                                    }

                                </Form.Field>
                                <Form.Field inline >
                                    <label>Message</label>
                                    <TextArea name='message' value={this.state.message} style={{ width: '22rem' }} onChange={this.handleChange} />
                                </Form.Field>
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </Form>
                        </Grid.Column>
                        <Grid.Column>
                            <Image style={{ paddingTop: '60px' }} src={Contact_Us} size='big' />
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

}

export default ContactUs;
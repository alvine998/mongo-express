import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { logo } from '../../assets';
import './style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="postion">
                <h2 style={{textAlign:'center', color:'#818181'}} >ADMIN {<br/>} MIDLAND PROPERTI</h2>
                <div className="form-outer">
                    <Form className="insideForm">
                        <img src={logo} className="immage" />
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" required autoFocus/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required/>
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Login;
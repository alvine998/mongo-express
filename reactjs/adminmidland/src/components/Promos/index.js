import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';
import './style.css';

class Promos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            file:[],
            imgSrc:[],
         };
    }

    handleImage = (e) => {
        this.setState({
            [e.target.name]: URL.createObjectURL(e.target.files[0])
        });
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign:'center'}}>Promo</h1>
                <div>
                    <Form>
                        <Form.File
                            id="file"
                            name="file"
                            accept="image/*"
                            label={this.state.file}
                            custom
                            onChange={this.handleImage.bind(this)}
                        />
                    </Form>
                </div>
                <div className="cardContainer">
                        <Card style={{width:300, height:400}}>
                            <Card.Img variant="top" src={this.state.file} alt="image" />
                        </Card>
                </div>  
                <div className="btnContainer">
                    <Button variant="contained" color="primary">
                        Upload
                    </Button>
                </div>
            </div>
        );
    }
}

export default Promos;
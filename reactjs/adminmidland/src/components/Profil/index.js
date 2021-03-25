import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';
import './style.css';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                id: null,
                profile:'',
                visi:'',
                misi:'',
                sejarah:'',
                message:''
         };

         this.handleProfile = this.handleProfile.bind(this);
         this.handleVisi = this.handleVisi.bind(this);
         this.handleMisi = this.handleMisi.bind(this);
         this.handleSejarah = this.handleSejarah.bind(this);
    }

    handleProfile = (event) => {
        this.setState({profile: event.target.value});
    }
    
    handleVisi = (event) => {
        this.setState({visi: event.target.value});
    }
    handleMisi = (event) => {
         this.setState({misi: event.target.value});
    }
    handleSejarah = (event) => {
         this.setState({sejarah: event.target.value});
    }

    componentDidMount(){
        axios({
            method:"GET",
            url:"http://localhost:8000/profil/",
            data:this.state
        })
        .then(res => {
            this.setState({
                currentData: res.data
            });
            console.log(res.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    resetForm(){
        this.setState({
            ...this.state,
            profile:'',
            visi:'',
            misi:'',
            sejarah:''
        })
        alert("Sukses Update Profil");
    }

    updateProfil(e){
        e.preventDefault();

        axios({
            method:"PUT",
            url:"http://localhost:8000/profil/60586a4b7723ab07087f9668",
            data:this.state
        })
        .then(res => {
            this.setState({
                ...this.state,
                profile:'',
                visi:'',
                misi:'',
                sejarah:'',
            })
            alert("Berhasil update data");
            console.log(res.data);
            console.log("Success Update Data");
        })
        .catch(err => {
            console.log(err);
        })
    }

    // handleSubmit(e){
    //     e.preventDefault();

    //     axios({
    //         method:"POST",
    //         url:"http://localhost:8000/profil/",
    //         data:this.state
    //     })
    //     .then(res => {
    //         alert("Berhasil disimpan");
    //         console.log(res.data);
    //     })
    //     .catch((err) => {
    //         alert("Gagal Simpan");
    //         console.log(err);
    //     });
    // }
    render() {
        const {profiles} = this.state;
        return (
            <div>
                    <div>
                        <h1 style={{textAlign:'center'}}>Company Profile</h1>
                        <TextField
                            id="outlined-multiline-static"
                            label="Profil Perusahaan"
                            multiline
                            rows={20}
                            placeholder="Ketik disini..."
                            variant="outlined"
                            value={this.state.profile}
                            onChange={this.handleProfile}
                            fullWidth={true}
                            autoFocus={true}
                        />
                        <div style={{paddingTop:20}} />
                        <TextField
                            id="outlined-multiline-static"
                            label="Visi"
                            multiline
                            rows={2}
                            placeholder="Ketik disini..."
                            variant="outlined"
                            value={this.state.visi}
                            onChange={this.handleVisi}
                            fullWidth={true}
                        />
                        <div style={{paddingTop:20}} />
                        <TextField
                            id="outlined-multiline-static"
                            label="Misi"
                            multiline
                            rows={4}
                            placeholder="Ketik disini..."
                            variant="outlined"
                            value={this.state.misi}
                            onChange={this.handleMisi}
                            fullWidth={true}
                        />
                        <div style={{paddingTop:20}} />
                        <TextField
                            id="outlined-multiline-static"
                            label="Sejarah"
                            multiline
                            rows={10}
                            placeholder="Ketik disini..."
                            variant="outlined"
                            value={this.state.sejarah}
                            onChange={this.handleSejarah}
                            fullWidth={true}
                        />
                        <div style={{paddingTop:20}} className="right">
                            <Button onClick={this.updateProfil.bind(this)} variant="contained" color="primary">
                                Save
                            </Button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Profil;
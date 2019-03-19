import React, { Component } from 'react';
import Username from "./Username";
import Email from "./Email";
import Agree from "./Agree";

class Form extends Component {
    state ={
        inputs:{
            Username:"",
            Email: "",
            Agree: false,
        },
        errorValidation:{
            Username: {message:"Username must be filled",
                hideStatus:true},
            Email: {message:"Email must be filled",
                hideStatus:true},
            Agree: {message:"Agree must be checked",
                hideStatus:true},
        },


    };
    handleInput = (e) => {
        const inputs = {...this.state.inputs};
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        inputs[name] = value;
        this.setState({
            inputs
        });
    };
    handleSubmit = (e) => {
        this.validateInputs();
        let formValidated = true;
        let errors = {...this.state.errorValidation};
        Object.keys(errors).map((key)=>{
            if(errors[key].hideStatus===false){
                formValidated = false;
            }
        });
        if(formValidated) {
            alert(JSON.stringify(this.state.inputs));
        }
        e.preventDefault();
    };
    validateInputs = () => {
        let errors = {...this.state.errorValidation};
        Object.keys(errors).map((key) =>{
            this.validateText(key);
            this.validateAgree(key);
        })
    };
    validateText = (key) => {
        let errors = {...this.state.errorValidation};

        if (key ==='Username'|| key ==='Email') {
            if (this.state.inputs[key].length < 1) {
                errors[key].hideStatus = false;
                this.setState({
                    errorValidation: errors
                })
            }
            else if (this.state.inputs[key].length > 0) {
                errors[key].hideStatus = true;
                this.setState({
                    errorValidation: errors
                })
            }
        }
    };
    validateAgree = (key) => {
        let errors = {...this.state.errorValidation};
        if (key ==='Agree') {
            if(this.state.inputs['Agree']===false) {
                errors[key].hideStatus = false;
                this.setState({
                    errorValidation: errors
                })
            }
            else if(this.state.inputs['Agree']===true){
                errors[key].hideStatus = true;
                this.setState({
                    errorValidation: errors
                })
            }
        }
    };
    render() {
        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <Username
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Username}/>
                    <Email
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Email}/>
                    <Agree
                        handleInput={this.handleInput}
                        error={this.state.errorValidation.Agree}/>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-outline-info"
                        >Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
import React from 'react';
import { Link } from "react-router-dom";
import { RegistrationUser } from '../../api/';

class RegistrationComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            repeatpassword: '',
            email: '',
            hiddenForm: true,
        }
    }

    SubmitHandler = (event) => {
        event.preventDefault();
        if (this.state.password === this.state.repeatpassword) {
            RegistrationUser({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
            }).then(_t => {
                this.setState({
                    username: '',
                    password: '',
                    repeatpassword: '',
                    email: '',
                    hiddenForm: false,
                });
            });
        } else {
            console.log('passwordOne: ', this.state.password);
            console.log('passwordTwo: ', this.state.repeatpassword);
            alert('Passwords do not match');
        }
    }

    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return this.state.hiddenForm ? (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10 col-12 border mt-5 pt-5 pb-3">
                        <h4 className="mb-3">Registration</h4>
                        <form onSubmit={ this.SubmitHandler }>
                            <div className="form-group">
                                <label>Username</label>
                                <input className="form-control" name="username" onChange={ this.InputHandler } required/>
                                <small className="form-text text-muted">We suggest blocking a personal alias.</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" name="password" onChange={ this.InputHandler } required/>
                            </div>
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input className="form-control" name="repeatpassword" onChange={ this.InputHandler } required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" name="email" onChange={ this.InputHandler } required/>
                                <small className="form-text text-muted">If you want restore access to login.</small>
                            </div>
                            <button className="btn btn-dark mt-3" type="submit" >Enter</button>
                        </form>
                        <div className="t-c mt-4">
                            <Link className="link" to="/">If you have an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10 col-12 border mt-5 pt-5 pb-3">
                        <h4 className="mb-3">Registration</h4>
                        <div className="t-c mt-4">
                            <p>Your account has been successfully created, you can login</p>
                            <Link className="link" to="/">to Log In</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationComponent;
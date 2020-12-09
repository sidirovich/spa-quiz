import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {
    UserCredentials,
    GetUserCredentials,
} from '../store/';
import { useStore } from "effector-react";

function RedirectForStore() {
    const effectorStore = useStore(UserCredentials);
    if (effectorStore) {
        return <Redirect to={{ pathname: "/menu" }} />
    } return null;
}

class AuthComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            login: '',
            password: '',
            handleralert: false,
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
    }

    SubmitHandler(event) {
        event.preventDefault();
        GetUserCredentials({
            username: this.state.login,
            password: this.state.password,
        }).then(
            this.setState({ isAuthenticated: true })
        );
    }

    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-10 border mt-5 pt-3 pb-3">
                        <div className="t-c mt-2 mb-4">
                            <h2>JS Private Office</h2>
                        </div>
                        <form onSubmit={ this.SubmitHandler }>
                            <div className="form-group">
                                <label>Login</label>
                                <input className="form-control" type="text" name="login" onChange={ this.InputHandler } required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" name="password" onChange={ this.InputHandler } required/>
                            </div>
                            <button className="btn btn-dark mt-3" type="submit" >Enter</button>
                        </form>
                        <div className="t-c mt-4">
                            <Link className="link" to="/registration">Create an account</Link>
                        </div>
                    </div>
                </div>
                <RedirectForStore />
            </div>
        );
    }
}

export default AuthComponent;
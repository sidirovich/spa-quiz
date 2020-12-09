import React from 'react';
import { Link } from "react-router-dom";

class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
            repeatpassword: '',
        }
    }

    SubmitHandler(event){
        event.preventDefault();
    }

    InputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                        <div class="row">
                        <div class="col-6 t-l">
                                <h4>Settings</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 pt-3 pb-3">
                        <div class="card mb-4">
                            <div class="card-body">
                                <p>Дата регистрации: воскресенье, 20 сентября 2020 г., 10:59</p>
                                <form>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" name="phone" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm password</label>
                                        <input type="password" name="repeatpassword" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-sm btn-dark btn-m-pointer mr-2" onClick={ () => {this.props.viewFunction(false)}} >Save</button>
                                    <Link className="link" to="/menu"><button type="button" className="btn btn-sm btn-dark btn-m-pointer">Close</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsComponent;
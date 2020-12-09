import React from 'react';
import { Link } from "react-router-dom";

export class MenuComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                        <div className="row">
                            <div className="col-6 t-l">
                                <h4>Menu</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-12 pt-3 pb-3">
                        <div className="list-group">
                            <div className="list-group-item">
                                <Link to="/content">My widgets</Link>
                            </div>
                            <div className="list-group-item">
                                <Link to="/crm">Elementary CRM</Link>
                            </div>
                            <div className="list-group-item">
                                <Link to="/payment">Payments</Link>
                            </div>
                            <div className="list-group-item">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="list-group-item">
                                <Link to="/exit">Exit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import { Link } from "react-router-dom";

class CrmComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                            <div class="row">
                                <div class="col-6 t-l">
                                    <h4>Elementary CRM</h4>
                                </div>
                                <div class="col-6 t-r">
                                    <button className="btn btn-dark btn-m-pointer"><i class="far fa-plus-square"></i> Create new</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-3 pt-3 pb-3">
                            <div className="list-group">
                                <div className="list-group-item">
                                    <div className="row">
                                        <div className="col t-c">
                                            <h5>Алексей 7 915 017-57-18</h5>
                                            <p style={{ marginBottom: '0rem' }}><small>32142</small> <small>quiz.joint-studio.ru</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CrmComponent;
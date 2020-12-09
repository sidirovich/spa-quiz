import React, { useState } from 'react';
import { useStore } from "effector-react";
import { Link } from "react-router-dom";
import { UserCredentials } from '../store/';
import API from '../../api/';

function ContentComponent() {
    const [widgets, setWidgets] = useState([]);
    const effectorStore = useStore(UserCredentials);

    API.Widgets.getWidgets(effectorStore).then(res => setWidgets(res));

    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                        <div className="row">
                            <div className="col-6 t-l">
                                <h4>Widgets list</h4>
                            </div>
                            <div className="col-6 t-r">
                                <button className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-plus-square"></i> Create new</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 pt-3 pb-3">
                        <div className="list-group">
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Демонстрационный квиз</h5>
                                        <div>
                                            <small>5e9dac1dc70518327c8d75f5</small>
                                        </div>
                                        <div>
                                            <small>quiz.joint-studio.ru</small>
                                        </div>
                                    </div>
                                    <div className="col-6 t-r">
                                        <Link to="/generator/quiz/">
                                            <button alt="edit" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                        </Link>
                                        <Link to="/generator/settings/">
                                            <button alt="settings" className="btn btn-sm btn-dark btn-m-pointer"><i className="fas fa-cogs"></i></button>
                                        </Link>
                                        <button alt="delete" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Демонстрационный квиз</h5>
                                        <div>
                                            <small>5e9dac1dc70518327c8d75f5</small>
                                        </div>
                                        <div>
                                            <small>dev.joint-studio.ru</small>
                                        </div>
                                    </div>
                                    <div className="col-6 t-r">
                                        <Link to="/generator/quiz/">
                                            <button alt="edit" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                        </Link>
                                        <Link to="/generator/settings/">
                                            <button alt="settings" className="btn btn-sm btn-dark btn-m-pointer"><i className="fas fa-cogs"></i></button>
                                        </Link>
                                        <button alt="delete" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col-6">
                                        <h5>Кухни эконом класса</h5>
                                        <div>
                                            <small>5e9dac1dc70518327c8d75f5</small>
                                        </div>
                                        <div>
                                            <small>quiz.mebeldarom24.ru</small>
                                        </div>
                                    </div>
                                    <div className="col-6 t-r">
                                        <Link to="/generator/quiz/">
                                            <button alt="edit" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-edit"></i></button>
                                        </Link>
                                        <Link to="/generator/settings/">
                                            <button alt="settings" className="btn btn-sm btn-dark btn-m-pointer"><i className="fas fa-cogs"></i></button>
                                        </Link>
                                        <button alt="delete" className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i></button>
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

export default ContentComponent;

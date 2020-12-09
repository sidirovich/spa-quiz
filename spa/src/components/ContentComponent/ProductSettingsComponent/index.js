import React from 'react';

export class ProductSettingsComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                        <div class="row">
                            <div class="col-6 t-l">
                                <h4>Quiz Settings</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-3 pt-3 pb-3">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div className="form-group">
                                    <label>Quiz name</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <button type="submit" className="btn btn-sm btn-dark btn-m-pointer">Save</button>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <h4>Theme Setting</h4>
                                <div className="form-group">
                                    <label>Quiz main title</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Main page image (URL to img)</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Color main</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Color second</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <button type="submit" className="btn btn-sm btn-dark btn-m-pointer">Save</button>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <h4>Analytics Setting</h4>
                                <p>Indicate the counter number in the systems you want to connect to track visits and marketing your quiz test.</p>
                                <div className="form-group">
                                    <label>Yandex.Metrika</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Google.Analytics</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Facebook</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>VK</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <div className="form-group">
                                    <label>Roistat</label>
                                    <input className="form-control" name="quizame" required/>
                                </div>
                                <button type="submit" className="btn btn-sm btn-dark btn-m-pointer">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
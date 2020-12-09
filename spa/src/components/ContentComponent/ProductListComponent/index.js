import React from 'react';

let QuestText = () => {
    return (
        <form className="mt-3">
            <p>Type: Text</p>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Quest title:</label>
                        <input type="text" className="form-control" name="title" required/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">Create</button>
        </form>
    );
}

let QuestImage = () => {
    return (
        <form className="mt-3">
            <p>Type: Image</p>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Quest title:</label>
                        <input type="text" className="form-control" name="title" required/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">Create</button>
        </form>
    );
}

let QuestInput = () => {
    return (
        <form className="mt-3">
            <p>Type: Input</p>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Quest title:</label>
                        <input type="text" className="form-control" name="title" required/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">Create</button>
        </form>
    );
}

let QuestSelect = () => {
    return (
        <form className="mt-3">
            <p>Type: Select</p>
            <div className="row">
                <div className="col-12">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Quest title:</label>
                        <input type="text" className="form-control" name="title" required/>
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-2">Create</button>
        </form>
    );
}

class PopupCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            form: 'text',
        };
    }

    ChangeForm = (val) => {
        this.setState({
            form: val
        });
    }

    render(){
        return (
            <div className="modal fade show" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content shadow">
                        <div className="modal-header">
                        <h6>Create new quest</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <button className="btn btn-primary w-100" onClick={ () => { this.ChangeForm('text')} } >text</button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary w-100" onClick={ () => { this.ChangeForm('image')} } >image</button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary w-100" onClick={ () => { this.ChangeForm('select')} } >select</button>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary w-100" onClick={ () => { this.ChangeForm('input')} } >input</button>
                                </div>
                            </div>

                            {this.state.form == 'text' ? <QuestText /> : null }
                            {this.state.form == 'image' ? <QuestImage /> : null }
                            {this.state.form == 'input' ? <QuestInput /> : null }
                            {this.state.form == 'select' ? <QuestSelect /> : null }

                        </div>
                    </div>
                </div>
            </div>
        );       
    }
}

export class ProductListComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-5 pt-3">
                        <div class="row">
                            <div class="col-6 t-l">
                                <h4>Quiz questions</h4>
                            </div>
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-4 t-c">
                                        <button className="btn btn-sm btn-block btn-dark btn-m-pointer">main</button>
                                    </div>
                                    <div class="col-4 t-c">
                                        <button className="btn btn-sm btn-block btn-dark btn-m-pointer">questions</button>
                                    </div>
                                    <div class="col-4 t-c">
                                        <button className="btn btn-sm btn-block btn-dark btn-m-pointer">settings</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-3 pt-3 pb-3">
                        <div className="list-group">
                            <div className="list-group-item mb-3">
                                <div className="row">
                                    <div className="col-12 t-r">
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i class="far fa-plus-square"></i> Answer</button>
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i class="far fa-question-circle"></i> Type</button>
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i> Delete</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h5><small>1.</small> Какой формы ваша кухня?</h5>
                                    </div>
                                    <div className="col-12">
                                        <div className="pl-3">
                                            <span className="badge badge-pill badge-light mr-2 mb-1">Type: Text</span> 
                                            <span className="badge badge-pill badge-light mr-2 mb-1">Required: True</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="pt-3 pl-3">
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="Прямая" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="Угловая" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="П-образная" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="С островом" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <button class="btn btn-dark" type="button">Save quest</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item mb-3">
                                <div className="row">
                                    <div className="col-6">
                                        <h5><small>2.</small> Какой материал фасадов вы хотите?</h5>
                                        <div>
                                            <span className="badge badge-pill badge-light mr-2 mb-1">Type: Text</span> 
                                            <span className="badge badge-pill badge-light mr-2 mb-1">Required: True</span>
                                        </div>
                                    </div>
                                    <div className="col-6 t-r">
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i class="far fa-plus-square"></i> Answer</button>
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i class="far fa-question-circle"></i> Type</button>
                                        <button className="btn btn-sm btn-dark btn-m-pointer"><i className="far fa-trash-alt"></i> Delete</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="pt-3 pl-3">
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="МДФ ПВХ" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="Пластик" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="Эмаль" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" class="form-control" value="Шпон" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-dark" type="button"><i className="far fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                            <div className="input-group mb-3">
                                                <button class="btn btn-dark" type="button">Save quest</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12 mt-2">
                        <button className="btn btn-sm btn-dark btn-m-pointer"><i class="far fa-plus-square"></i> Add new</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}
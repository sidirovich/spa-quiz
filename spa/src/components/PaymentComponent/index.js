import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class PaymentComponent extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-5 pt-3">
                        <div class="row">
                        <div class="col-6 t-l">
                                <h4>Payment Service</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-10 mt-3 pt-3 pb-3">
                        <div className="row">
                            <div className="col">
                                <p>Выберите необходимый лимит заявок в месяц:</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 30</button>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 100</button>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 500</button>
                            </div>
                        </div>
                        <div className="row mt-3 pb-3">
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 1000</button>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 1500</button>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-block btn-light">до 5000</button>
                            </div>
                        </div>
                        <hr />
                        <div className="row mt-3">
                            <div className="col">
                                <p><small>Количество квизов – неограниченно</small></p>
                                <p><small>Заявки для любого квиза</small></p>
                                <p><small>Сверх лимита - 5 ₽ / заявка</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentComponent;
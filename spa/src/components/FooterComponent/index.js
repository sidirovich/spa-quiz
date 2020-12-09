import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class FooterComponent extends React.Component{
    render(){
        return (
            <div className="container">
              <div className="row justify-content-center mt-2 mb-2">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8 col-12 t-c mt-3">
                  <small>based on <a href="https://joint-studio.ru/elementary-cms/">Elementary CMS</a></small>
                </div>
              </div>
            </div>
        );
    }
}

export default FooterComponent;
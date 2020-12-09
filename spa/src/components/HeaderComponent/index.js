import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
            <div className="d-flex justify-content-center mt-5">
                <div className="mr-3">
                    <Link to="/menu">Menu</Link>
                </div>
                <div className="mr-3">
                    <Link to="/exit">Exit</Link>
                </div>
                <div>
                    <Link to="https://teleg.run/sidirovich">Support</Link>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default HeaderComponent;
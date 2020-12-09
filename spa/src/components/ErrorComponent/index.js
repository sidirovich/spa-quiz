import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ErrorComponent extends React.Component{
    render(){
        return (
            <div className="text-center">
                <p className="mt-5 mb-3">
                    <h2>Page is not found</h2>
                    <br />
                    <Link to="/content">back menu</Link>
                </p> 
            </div>
        );
    }
}

export default ErrorComponent;
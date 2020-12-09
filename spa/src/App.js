import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStore } from "effector-react";

import HeaderComponent from './components/HeaderComponent/';
import FooterComponent from './components/FooterComponent/';

import { MenuComponent } from './components/MenuComponent';
import ContentComponent from './components/ContentComponent/';
import CrmComponent from './components/CrmComponent/';
import AuthComponent from './components/AuthComponent/';
import RegistrationComponent from './components/RegistrationComponent/';
import PaymentComponent from './components/PaymentComponent/';
import SettingsComponent from './components/SettingsComponent/';
import { QuizComponent } from './components/QuizComponent';
import { ExitComponent } from './components/ExitComponent';
import ErrorComponent from './components/ErrorComponent/';
import { ProductListComponent } from './components/ContentComponent/ProductListComponent';
import { ProductSettingsComponent } from './components/ContentComponent/ProductSettingsComponent';
import {
  UserCredentials,
  LocalUserCredentials,
} from './components/store/';
import { getStorageJWT } from './utils/session';

function PrivateRoute({ children, ...rest }) {
  const effectorStore = useStore(UserCredentials);
  return (
    <Route
      {...rest}
      render={({ location }) =>
      effectorStore ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      currentPage: 3,
    }
  }

  componentDidMount() {
    if (!this.state.isAuthenticated) {
      const storageJWT = getStorageJWT();
      if (storageJWT) {
        LocalUserCredentials(storageJWT);
        this.setState({ isAuthenticated: true });
      }
    }
  }

  render() {
      return (
          <Router>
            <Switch>
              <Route exact path="/">
                <AuthComponent isAuthenticated={ this.state.isAuthenticated } />
                <FooterComponent />
              </Route>
              <Route path="/quiz">
                <QuizComponent />
              </Route>
              <PrivateRoute path="/menu">
                <HeaderComponent />
                <MenuComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/registration">
                <RegistrationComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/crm">
                <HeaderComponent />
                <CrmComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/content">
                <HeaderComponent />
                <ContentComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/generator/quiz/">
                <HeaderComponent />
                <ProductListComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/generator/settings/">
                <HeaderComponent />
                <ProductSettingsComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/settings">
                <HeaderComponent />
                <SettingsComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/payment">
                <HeaderComponent />
                <PaymentComponent />
                <FooterComponent />
              </PrivateRoute>
              <PrivateRoute path="/exit">
                <ExitComponent />
              </PrivateRoute>
              <PrivateRoute path="*">
                <ErrorComponent />
                <FooterComponent />
              </PrivateRoute>
            </Switch>
          </Router>
      );
  }
}

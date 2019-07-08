import React, { Component } from 'react';
import LoginRegisterForm from './components/loginregister';
import Main from './Main';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.loggedIn === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
  )} />
)

class NotFound extends Component {
  render() {
    return (
      <Redirect to="/"/>
    );
  }
}

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.loggedIn === false
      ? <Component {...props} />
      : <Redirect to = {{
        pathname: '/app',
      }} />
  )} />
)

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute path="/app" compoment={() => <Main changeLoginState=
            {this.props.changeLoginState}/>} loggedIn={this.props.loggedIn}/>
          <LoginRoute exact path="/" component={() => <LoginRegisterForm changeLoginState=
            {this.props.changeLoginState}/>} loggedIn={this.props.loggedIn}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../assets/css/style.css';
import '@synapsestudios/react-drop-n-crop/lib/react-drop-n-crop.min.css';
import './components/fontawesome';
import { withApollo } from "react-apollo";
import Router from './router';

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = props.client.onResetStore(
      () => this.changeLoginState(false)
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  state = {
    loggedIn: false
  }
  changeLoginState = (loggedIn) => {
    this.setState({ loggedIn });
  }
  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Graphsite - Feed</title>
          <meta name="description" content="Newsfeed of all your friends on Graphsite" />
        </Helmet>
        <Router loggedIn={this.state.loggedIn} changeLoginState={this.changeLoginState} />
      </div>
    );
  }
}

export default withApollo(App)
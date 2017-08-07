import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import axios from 'axios';

//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cyptFiles: []

    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  // grabFilesFromDB() {
  //   axios()

  // }

  render () {
    return (<div>
      <h1>Crypto</h1>
      <Login />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
<<<<<<< HEAD

import { Router, browserHistory } from 'react-router';
import routes from './routes';

=======
import Search from './components/Search.jsx';
>>>>>>> 1433b440b78e6a79635bf4c0cbb4d6eaf9c6ac48
import axios from 'axios';
import Signup from './components/Signup.jsx';

//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      cyptFiles: []

=======
    this.state = { 
      cyptFiles: [],
      page: <Login setPage={this.setPage}/>
>>>>>>> 1433b440b78e6a79635bf4c0cbb4d6eaf9c6ac48
    }
    this.setPage = this.setPage.bind(this);
  }

  setPage(page){
    console.log('we was called');
    console.log((this.state.page));
    this.setState({ page: page})
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
      <button onClick={() => { this.setPage(<Search/>)}}>DickButts</button>
      {this.state.page}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

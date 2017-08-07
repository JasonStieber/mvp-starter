import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Search from './components/Search.jsx';
import axios from 'axios';
import Signup from './components/Signup.jsx';

//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cyptFiles: [],
      page: <Login setPage={this.setPage}/>
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
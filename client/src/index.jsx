import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
//import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cyptFiles: []
      
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // $.get('/login')
  //   .done((login) => {<Login/>});
    
  render () {
    return (<div>
      <h1>Crypto</h1>
      <Login />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
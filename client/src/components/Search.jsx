import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }
    this.updateUser = this.updateUser.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  updateUser(event){
    this.setState({user: event.target.value});
      }

  updatePass(event){
    this.setState({pass: event.target.value});
 }

  handleLogin(){
    alert('data will be sent');
    var obj = {user: this.state.user, pass: this.state.pass};
    axios.post('/login',obj)
      .then((data) => {
       console.log(data.body, 'was posted');
      })
      .always(() => {
        console.log('error in index.js database post request');  
      });
  }

  handleSignup(){
    alert('you have signed up');
    var obj = {user: this.state.user, pass: this.state.pass};
    axios.post('/signup',obj)
      .then((data) => {
       console.log(data.body.user, 'was posted');
      })
      .always(() => {
        console.log('error in index.js database post request');  
      });
  }

  render() {
    return (
      <form>
        <div>
          DickButt:
            <div>
              <input type='text' value={this.state.user} onChange={this.updateUser}/>
            </div>
         </div>
        <div>
          Password: 
          <div>
            <input type='text' value={this.state.pass} onChange={this.updatePass}/>
          </div>
        </div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleSignup}>Sign Up</button>
      </form>
    );
  }
}

export default Search;
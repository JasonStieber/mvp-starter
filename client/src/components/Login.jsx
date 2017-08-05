import React from 'react';
import $ from 'jquery';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    }
    this.updateUser = this.updateUser.bind(this);
    this.updatePass = this.updatePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateUser(event){
    this.setState({user: event.target.value});
      }

  updatePass(event){
    this.setState({pass: event.target.value});
 }

  handleSubmit(){
    alert('data will be sent');
    $.post('/server',{user: this.state.user, pass: this.state.pass}, (data, status) => {
      console.log(data, ' successfully sent to server')
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Username:
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
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Login;
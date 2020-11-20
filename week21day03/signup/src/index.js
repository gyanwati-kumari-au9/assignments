import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fname: '',
        email: '',
        pwd: '',
        MobNum: ''
    }
     
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.email === 'admin' && this.state.pwd === 'admin'){
        alert('Welcome Admin, you have successfully logged in');
        console.log('state',this.state);
        return;
      }
      alert('Invalid Username or password, try again')
      console.log('state',this.state);
    }

    
  
    render() {
      return (
          <div className="container">
            <div className="row justify-content-center">
                <div className="col col-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" name="name" placeholder="FullName"  onChange={event => this.setState({fname: event.target.value})}/>
                          <small id="emailHelp" className="form-text text-muted">Please enter your fullname.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailInput">Email address</label>
                            <input type="text" className="form-control" placeholder="username"  id="emailInput" aria-describedby="emailHelp"
                              onChange={event => this.setState({email: event.target.value})}
                            />
                            <small id="emailHelp" className="form-text text-muted">Please enter your username.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" 
                              onChange={event => this.setState({pwd: event.target.value})}
                            />
                            <small id="emailHelp" className="form-text text-muted">Please enter your password.</small>
                        </div>
                        <div className="form-group">
                          <input type="number" className="form-control" placeholder="MobileNumber"  
                            onChange={event => this.setState({MobNum: event.target.value})}
                          />
                          <small id="emailHelp"className="form-text text-muted">Please enter your MobileNumber.</small>
                        </div>
                        <button type="submit" className="btn btn-primary" >Login</button>
                    </form>
                </div>
            </div>
          </div>
      )
    }
  }



ReactDOM.render(<Signup/>, document.getElementById('root'))
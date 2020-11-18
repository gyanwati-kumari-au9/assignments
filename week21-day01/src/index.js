import React from 'react'
import ReactDOM from 'react-dom'


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      // create a ref to store the DOM element
      this.nameEl = React.createRef();
      this.pwdEl = React.createRef();
    //   this.nameEl = this..bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.nameEl.current.value === 'admin' && this.pwdEl.current.value === 'admin'){
        alert('Welcome Admin, you have successfully logged in');
        return;
      }
      alert('Invalid Username or password, try again')
      
    }
  
    render() {
      return (
          <div className="container">
            <div className="row justify-content-center">
                <div className="col col-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="emailInput">Email address</label>
                            <input type="text" className="form-control" placeholder="username"  id="emailInput" aria-describedby="emailHelp" ref={this.nameEl} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your username.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" ref={this.pwdEl} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your password.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
          </div>
      )
    }
  }



ReactDOM.render(<LoginForm/>, document.getElementById('root'))
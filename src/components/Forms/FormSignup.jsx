import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";
import "../../styles/signup.css"

class FormSignup extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    email: "",
    password: "",
    phone_number: 0,
  };

  isEmailCorrect() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.state.email).toLowerCase());
  }


  isStrongPassword() {
    return this.state.password.length >= 5;
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/profile" />;
    }

    return (
      <div className="main-signup">
<p className="signup" align="center">Sign Up</p>
     
      <form className="form-signup" onSubmit={this.handleSubmit}>
        <div>
        <label htmlFor="username"></label>
        <input
          className="un-signup"
          onChange={this.handleChange}
          value={this.state.username}
          invalid={this.state.email.length > 0 && !this.isEmailCorrect()}
          valid={this.isEmailCorrect()}
          type="username"
          id="username"
          name="username"
          placeholder="Username"
        />
        </div>
      <div>
      <label htmlFor="email"></label>
        <input
        className="un-signup"
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          />
      </div>
       <div>
       <label htmlFor="password"></label>
        <input
        className="un-signup"
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          invalid={
            this.state.password.length > 0 && !this.isStrongPassword()
          }
          valid={this.state.password.length > 0 && this.isStrongPassword()}
          id="password"
          name="password"
          placeholder="Password"
        />
       </div>
        
        <div>
        <label htmlFor="phone_number"></label>
        <input
        className="un-signup"
          onChange={this.handleChange}
          value={this.state.phone_number}
          type="phone_number"
          id="phone_number"
          name="phone_number"
          placeholder="Phone number"
        />
        </div > 
        <div className="submit-area-su" >
        <button className="submit-signup">Submit</button>
        </div>
       
      </form>
      {this.state.email.length > 3 && (
          <p>
            {this.isEmailCorrect()
              ? 'Your email is valid'
              : 'Your email is invalid'}
          </p>
        )}
      </div>
    );
  }
} 
      

export default withRouter(FormSignup);

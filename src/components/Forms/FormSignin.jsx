import React, { Component } from "react";
import UserContext from "../Auth/UserContext";
import { withRouter } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { Redirect } from "react-router-dom";
import "../../styles/signin.css";

class FormSignin extends Component {
  static contextType = UserContext;

  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.context.setUser(data);
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.context.user) {
      return <Redirect to="/" />;
    }

    return (
    <div className="main">
      <p className="sign" align="center">Sign in</p>
      <form className="form1" onChange={this.handleChange} onSubmit={this.handleSubmit}>
    
       <div >
        <input className="un" type="email"  name="email" onChange={this.handleChange}
              value={this.state.email}
              placeholder="Email"/>
      </div>
          <div>
          </div>
        <input  className="pass" align="center"  type="password" id="password" name="password" onChange={this.handleChange}
              value={this.state.password} placeholder="Password"
             />
              <div className="submit-area" >
        <button className="submit">Submit</button>
        </div>
      </form>
      </div>
    );
  }
}

export default withRouter(FormSignin);

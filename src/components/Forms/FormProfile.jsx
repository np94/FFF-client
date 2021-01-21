import React, { Component } from "react";
import { buildFormData } from "../../utils";
import apiHandler from "../../api/apiHandler";
import UserContext from "../Auth/UserContext";
import "../../styles/edit-pro.css"

class FormProfile extends Component {
  static contextType = UserContext;
  state = {
      user: {
        username: "",
        password:"",
        profilImg: "",
        phone_number: 0,
      }
  };

  imageRef = React.createRef();

  componentDidMount() {
    const userId = this.props.match.params.id;
    apiHandler
      .getUserInfos(userId)
      .then((data) => {
        this.setState({ user: data});
      })
      .catch((error) => {
        console.log(error);
      });
    }

  handleChange = (event) => {
    const key = event.target.name; 
    const value = event.target.value;
    this.setState({ user: { ...this.state.user, [key]: value } });
  };

  isValidInput = (key) => {
    if (this.state.user[key] === "") {
      return false;
    } else return true;
  };

  checkError = () => {
    for (const key in this.state.user) {
      if (this.state[key] === "") {
        return true;
      }
    }
    return false;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData();
    const {...data} = this.state;
    buildFormData(fd, data)

    fd.append("profileImg", this.imageRef.current.files[0]);
    

    apiHandler
      .updateUser(fd)
      .then((data) => {
        this.props.history.push("/profile");
        this.setState({
          httpResponse: {
            status: "success",
            message: "Profile successfully updated.",
          },
        });
        this.context.setUser(data);
        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      })
      .catch((error) => {
        this.setState({
          httpResponse: {
            status: "failure",
            message:
              "Something bad happened while updating your profile, try again later",
          },
        });

        this.timeoutId = setTimeout(() => {
          this.setState({ httpResponse: null });
        }, 2000);
      });
  };

  render() {
    return (
        <div className="missing">
          <div className="main-edit-pro">
            <p className="form-pro">Edit your profile</p>
          
        <form className="pro-form" onSubmit={this.handleSubmit}>
          <img className="image-pro" src={this.state.user.profileImg} alt="animal"/>
          <label className="label" htmlFor="image">
            </label>
            <input
            className="un-pro"
              ref={this.imageRef}
              onChange={this.handleChange}
              id="profilImg"
              name="profilImg"
              type="file"
              

            />
            
          <div className="form-group">
            <label className="label" htmlFor="username">
            </label>
            <input
              className="un-pro"
              id="username"
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.user.username}
              placeholder="Username"
            />
            {!this.isValidInput("username") && (
              <p className="input-error">Invalid input</p>
            )}
          </div>

          <div className="form-group">
            <label className="label" htmlFor="password">
            </label>
            <input
              className="un-pro"
              id="password"
              type="text"
              name="password"
              onChange={this.handleChange}
              value={this.state.user.password || ""}
              placeholder="Password"
              
            />
            {!this.isValidInput("password") && (
              <p className="input-error">Invalid input</p>
            )}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="phoneNumber">
              
            </label>
            <input
              className="un-pro"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              onChange={this.handleChange}
              value={this.state.user.phoneNumber}
              placeholder="Phone number"
            />
            {!this.isValidInput("phoneNumber") && (
              <p className="input-error">Invalid input</p>
            )}
          </div>
          <button className="submit-pro">Save</button>
        </form>
      </div>
      </div>
    );
  }
}

export default FormProfile;

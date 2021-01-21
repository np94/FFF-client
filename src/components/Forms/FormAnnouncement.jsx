import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import apiHandler from '../../api/apiHandler';
import AutoComplete from "../AutoComplete";
import UserContext from "../Auth/UserContext";
import "../../styles/form-announce.css"


class FormAnnouncement extends Component {
    static contextType = UserContext;
    state = {
            title: "",
            name: "",
            location: {
              coordinates: [],
            },
            email: "",
            image: "",
            description: "",
            pet_type: "",
            status:"",
            comments: "",
    };
    
    imageRef = React.createRef();
   
  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({ [key]: value });
  };

    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)

        const fd = new FormData();

        for (let key in this.state) {
            fd.append(key, this.state[key]);
        }

        fd.append("image", this.imageRef.current.files[0]);

        apiHandler
          .addAnnounce(fd, {
            title: this.state.title,
            name: this.state.name,
            location: this.state.location,
            email: this.state.email,
            image: this.state.image,
            description: this.state.description,
            pet_type:this.state.pet_type,
            status:this.state.status,
            comments:this.state.comments,
          })
          .then((data) => {
            this.props.history.push("/profile");

          });
      };

      handlePlace = (place) => {
        const location = place.geometry;
        this.setState({ location, formattedAddress: place.place_name });
      };

    render() {
        return (
          <div className="missing">
            <div className="main-form">
            <p className="form" align="center">Report a missing/found animal</p>
          
            <form className="announce-form" onSubmit={this.handleSubmit}
            ref={this.formRef}>
                <div>
                <label htmlFor="title"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.title}
              id="title"
              name="title"
              type="text"
              placeholder="Title"
            />
                </div>
          <div>
          <label htmlFor="name"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.name}
              id="name"
              name="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="location">
            </label>
            <AutoComplete onSelect={this.handlePlace} />
          </div>
            <div>
            <label htmlFor="email"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.email}
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
            />
            </div>
            <div className="form-group">
            <label className="label" htmlFor="status">
              
            </label>
            <select
            className="un-form"
              name="status"
              id="status"
              onChange={this.handleChange}
              value={this.state.status}
              placeholder="Status"
            >
              <option  className="un-form" value="" disabled>
                Select a status
              </option>
              <option value="Missing">Missing</option>
              <option value="Found">Found</option>
            </select>
          </div>
            <div>
            <label htmlFor="description"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.description}
              id="description"
              name="description"
              type="text"
              placeholder="Description"
            />
            </div>
         
            <div>
            <label htmlFor="image"></label>
            <input
            className="un-form"
              ref={this.imageRef}
              onChange={this.handleChange}
              value={this.state.image}
              id="image"
              name="image"
              type="file"
              placeholder="Image"
            />
            </div>
           
         
            <div>
            <label htmlFor="pet_type"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.pet_type}
              id="pet_type"
              name="pet_type"
              type="text"
              placeholder="Pet type"
            />
            </div>
           
           <div>
           <label htmlFor="comments"></label>
            <input
            className="un-form"
              onChange={this.handleChange}
              value={this.state.comments}
              id="comments"
              name="comments"
              type="text"
              placeholder="Comments"
            />
           </div>
           
            <button className="submit-form">Submit !</button>
          </form>
          </div>
          </div>
        );
    }
}

export default withRouter(FormAnnouncement);
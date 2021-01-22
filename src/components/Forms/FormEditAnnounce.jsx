import React, { Component } from 'react';
import apiHandler from '../../api/apiHandler';
import UserContext from "../Auth/UserContext";
import { buildFormData } from "../../utils";
import AutoComplete from "../AutoComplete";
import '../../styles/edit-form.css'


class FormEditAnnounce extends Component {
    static contextType = UserContext;
    state = {
        title: "",
        name: "",
        email: "",
        description: "",
        image:"",
        location: {
          coordinates: [],
        },
        status:"",
        pet_type:"",
        comments:"",
    };

    imageRef = React.createRef();

    componentDidMount() {
        const announceId = this.props.match.params.id;
        apiHandler
          .getOneAnnounce(announceId)
          .then((apiResponse) => {
            console.log(apiResponse)
            this.setState({
               title:apiResponse.title,
                name: apiResponse.name,
                email: apiResponse.email,
                description: apiResponse.description ,
                location: {
                  coordinates: apiResponse.location.coordinates,
                  },
                 status: apiResponse.status,
                 pet_type: apiResponse.pet_type,
                 comments: apiResponse.comments,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        this.setState({ [key]: value });
      };


    handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData();
        const { httpResponse, ...data } = this.state;
        buildFormData(fd, data)

        fd.append("image", this.imageRef.current.files[0]);

        const announceId = this.props.match.params.id;

        apiHandler
          .updateAnnounce(this.props.announceId, fd)
          .then((data) => {

            this.props.history.push("/profile");
            this.setState({
                httpResponse: {
                  status: "success",
                  message: "Item successfully added.",
                },
              });
              this.timeoutId = setTimeout(() => {
                this.setState({ httpResponse: null });
              }, 1000);
            })
            .catch((error) => {
              this.setState({
                httpResponse: {
                  status: "failure",
                  message: "An error occured, try again later.",
                },
              });
              this.timeoutId = setTimeout(() => {
                this.setState({ httpResponse: null });
              }, 1000);
            });
      
      };

      handlePlace = (place) => {
        const location = place.geometry;
        this.setState({ location, formattedAddress: place.place_name });
      };
    

    render() {
        return (
          <div className="missing">
          <div className="main-edit">
<p className="edit-form" align="center">Edit your announcement</p>
            <form className="form-edit"onSubmit={this.handleSubmit}
            ref={this.formRef}>
                <div>
                <label htmlFor="title"></label>
            <input
              className="un-edit"
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
             className="un-edit"
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
             className="un-edit"
              onChange={this.handleChange}
              value={this.state.email}
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
            />
            <div className="form-group">
            <label className="label" htmlFor="status">
              
            </label>
            <select
              name="status"
              id="status"
              onChange={this.handleChange}
              value={this.state.status}
              placeholder="Status"
              className="un-edit"
            >
              <option value="" disabled>
                Select a status
              </option>
              <option value="Missing">Missing</option>
              <option value="Found">Found</option>
            </select>
          </div>
            </div>
            <div>
            <label htmlFor="description"></label>
            <input
             className="un-edit"
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
             className="un-edit"
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
             className="un-edit"
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
             className="un-edit"
              onChange={this.handleChange}
              value={this.state.comments}
              id="comments"
              name="comments"
              type="text"
              placeholder="Comments"
            />
           </div>
           
            <button className="submit-edit">Submit !</button>
          </form>
          </div>
          </div>
        );
    };
};

export default FormEditAnnounce;
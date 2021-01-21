
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../components/Auth/UserContext";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";
import withUser from "../components/Auth/withUser";
import "../styles/profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Profile extends Component {
  static contextType = UserContext;
  
  state = {
    userAnnounces:[],
    selectedAnnounce: null,
  };

  componentDidMount() {
    apiHandler
    .getUserAnnounce()
    .then((data) => {
      this.setState({ userAnnounces: data });
    });
  }

  deleteAnnounce = (announceId) => {
    apiHandler.removeAnnounce(announceId).then(() => {
      const userAnnounces = [...this.state.userAnnounces].filter(
        (announce) =>  announce._id !== announceId
      );
      this.setState({ userAnnounces });
    });
  };

  onAnnounceSelect = (announceId) => {
    const selectedAnnounce = this.state.userAnnounces.find(
      (announce) => announce._id === announceId
    );
    this.setState({ selectedAnnounce: selectedAnnounce });
  };

  onEditFormClose = () => {
    this.setState({ selectedAnnounce: null });
  };

  handleAnnounceUpdate = (updatedAnnounce) => {
    const userAnnounces = [...this.state.userAnnounces].map((announce) =>
    announce._id === updatedAnnounce._id ? updatedAnnounce : announce
    );
    this.setState({ userAnnounces });
  };
  
  addAnnounce = (announce) => {
    this.setState({ userAnnounces: [...this.state.userAnnounces] });
  };

  render() {
    const { user } = this.context;
    const { userAnnounces } = this.state;
    if (!user) return null;
    return (
      <div className="all">
      <section className="Profile">
        <div className="user-presentation">
          <h2 className="username">
           Hi {user.username}!
          </h2>
        </div>
        <div className="user-image">
          <img src={user.profileImg} alt={user.profileImg} />
        </div>
        <div>
          
          <button  className="link-profile"><Link to="/profile/settings">Edit profile</Link></button>
          <button className="link-create"><NavLink to="/create">Report Missing</NavLink></button>
        </div>
          
          <div className="missing">
            <h3 className="title">Your announcements</h3>
            {this.state.userAnnounces  && this.state.userAnnounces.map((announce) => {
                    return (
                        <div className="missing_info" 
                        key={announce._id}   
                       >
                            <img
                          style={{
                            width: "100vw",
                            height: "",
                            
                          }}
                          src={announce.image}
                          alt={announce.name}
                            />
                        <Link to={`/missing/${announce._id}`}>
                          <h2>{announce.title}</h2>
                        </Link>
                        <h3>{announce.name}</h3>
                        <h3>{announce.formattedAddress}</h3>
                        <h3>{announce.pet_type}</h3>
                        <h3>{announce.description}</h3>
                        <div className="icons">
                        <Link to={`/profile/${announce._id}/edit`}>
                        <i className="fas fa-edit"></i>
                         </Link>

                       <i className="fas fa-trash" onClick={() => this.deleteAnnounce(announce._id)}></i>
          
                       </div>
                      </div>
                    )}
            )}
          </div>
      </section>
      </div>
    );
  }
}


export default withUser(Profile);


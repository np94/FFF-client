import React, { Component } from 'react'
import apiHandler from "../api/apiHandler"
import { Link } from "react-router-dom";
import '../styles/missing.css'


class Missing extends Component {
    state = {
        announces: [],
    };

    componentDidMount() {
        apiHandler
        .getAnnounce()
        .then((responseFromApi) => {
          this.setState({
            announces: responseFromApi
          });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    

    render() {
      
        return (
            <div className="missing">
              <div className="missing-all">
            <h2 className="missing_title" style={{ align: "center",
  color: "#6b6d05"}}>Missing pets</h2>
             {this.state.announces  && this.state.announces.map((announce) => {
                if (announce.status[0] === "Missing"){
                    return (
                        <div className="missing_info" key={announce._id}>
                            <img
                          style={{
                            width: "100vw",
                            height: "50vh",
                          }}
                          src={announce.image}
                          alt={announce.name}
                            />
                        <Link to={`/missing/${announce._id}`}>
                          <h3>{announce.title}</h3>
                        </Link>
                        <h4>{announce.name}</h4>
                        <h4>{announce.location.coordinates}</h4>
                        <h4>{announce.pet_type}</h4>
                        <h4>{announce.description}</h4>
                      </div>
                    )
                  }
            })}
            </div>
        </div>
        )
    }
}

export default Missing


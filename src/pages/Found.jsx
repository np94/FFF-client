import React, { Component } from 'react'
import apiHandler from "../api/apiHandler"
import { Link } from "react-router-dom";
import '../styles/found.css'

class Found extends Component {
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
            <div className="found">
              <div className="all">

              
            <h2 className="found_title">Found page</h2>
             {this.state.announces.map((announce)=>{
                 if (announce.status[0] === "Found"){
                    return (
                        <div className="found_info" key={announce._id}>
                            <img
                          style={{
                            width: "100vw",
                            height: "50vh",
                          }}
                          src={announce.image}
                          alt={announce.name}
                            />
                        <Link to={`/found/${announce._id}`}>
                          <h3>{announce.title}</h3>
                        </Link>
                        <h4>{announce.name}</h4>
                        <h4>{announce.location.coordinates}</h4>
                        <h4>{announce.pet_type}</h4>
                        <h4>{announce.description}</h4>
        
                      </div>
                    )}
               
            
            })}
            </div>
        </div>
        )
    }
}

export default Found;


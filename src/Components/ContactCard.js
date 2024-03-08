import React from "react";
import { Link } from "react-router-dom";
import user from "../Images/user.png"

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div key={id} className="item">
            <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <i className="trash alternate outline icon" 
                    style={{color: "red", marginTop: "7px", marginLeft:"10px"}}
                    onClick={() => props.deleteclickHandler(id)}
                    ></i>
                    <Link to={{pathname:`/edit`, state:{contact: props.contact}}}></Link>
                    <i className="edit alternate outline icon" 
                    style={{color: "blue", marginTop: "7px"}}
                    onClick={() => props.deleteclickHandler(id)}
                    ></i>
            </div>
    )
}

export default ContactCard;
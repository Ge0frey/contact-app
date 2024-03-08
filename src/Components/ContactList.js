import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputEl = useRef("");
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map ((contact) => {
        return(
            <ContactCard 
            contact = {contact} 
            deleteclickHandler={deleteContactHandler} 
            key = {contact.id}/>
        )
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    }

    return (
        <div className="main">
            <h2 style={{marginTop:"30px"}}>
                Contact List
            </h2>
            <div className="ui search">
                <div className="ui icon input" style={{marginBottom:"10px"}}>
                    <input ref={inputEl} type="text" placeholder="Search contacts" className="prompt" value = {props.term} onChange={ getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <Link to= "/add">
                <button className="ui button black right">Add Contact</button>   
            </Link>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts available"}</div>
        </div>
    );
}

export default ContactList
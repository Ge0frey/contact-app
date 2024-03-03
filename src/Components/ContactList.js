import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };

    const contacts = [
        {
        id: '1',
        'name' : 'Geofrey',
        'email': 'jeffkimzyjoe@gmail.com'
    },
]
    const renderContactList = props.contacts.map ((contact) => {
        return(
            <ContactCard 
            contact = {contact} 
            deleteclickHandler={deleteContactHandler} 
            key = {contact.id}/>
        )
    })
    return (
        <div className="ui celled list">{renderContactList}</div>
    );
}

export default ContactList
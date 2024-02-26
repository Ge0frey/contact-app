import React, { useState } from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';


function App () {
  const [contacts, setContacts] = useState([]);

  const addContactHadler = (contact) => {
    console.log (contact)
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHadler = {addContactHadler}/>
      <ContactList contacts = {contacts}/>
    </div>
  )
}

export default App;
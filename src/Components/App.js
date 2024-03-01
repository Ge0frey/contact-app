import React, { useEffect, useState } from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';


function App () {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('Retrieved Contacts:', retrievedContacts);
    if (retrievedContacts) setContacts(retrievedContacts);
  }, []);
  
  useEffect(() => {
    console.log('Contacts updated, saving to local storage:', contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  

  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  )
}

export default App;
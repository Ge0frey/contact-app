import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const Uuid = uuidv4();
console.log(Uuid);

function App () {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: Uuid, ...contact}])
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !==id
    });

    setContacts(newContactList);
  }

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
      <Router>
        <Header/>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
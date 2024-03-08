import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import api from "../api/contacts"
import AddContact from './AddContact';
import EditContact from './EditContact';
import Header from './Header';
import ContactList from './ContactList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactDetail from "./ContactDetail"

const Uuid = uuidv4;
//console.log(Uuid);

function App () {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([])

  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    //console.log(contact)
    const request = {
      id: Uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  };


  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    const {id, name, email} = response.data
    setContacts(contacts.map(contact => {
      return contact.id === id ? {...response.data} : contact
    }))
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !==id
    });

    setContacts(newContactList);
  };

  const searchHandlrer = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResults(newContactList)
    }  
    else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log('Retrieved Contacts:', retrievedContacts);
    // if (retrievedContacts) setContacts(retrievedContacts);

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts (allContacts);
    };

    getAllContacts();
  }, []);
  
  useEffect(() => {
    //console.log('Contacts updated, saving to local storage:', contacts);
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  

  return (
    <div className='ui container'>
      <Router>
        <Header/>
        <Routes>

          <Route 
            path="/" 
            exact 
            Component = {() => (
              <ContactList 
                contacts={searchTerm.length < 1 ? contacts : searchResults} 
                getContactId ={removeContactHandler}
                term = {searchTerm}
                searchKeyword = {searchHandlrer}
              />
            )}
          />

          <Route 
            path="/add" 
            Component = {() => (
              <AddContact addContactHandler={addContactHandler}/>
            )}
          />

          <Route  
              path="/edit" 
              element = {<EditContact updateContactHandler={updateContactHandler} />}
            />

          <Route path="/contact/:id" element={<ContactDetail contacts={contacts}/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App;
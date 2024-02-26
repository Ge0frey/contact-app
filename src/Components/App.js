import React from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';


function App () {
  const contacts = [
    {
      id: "1",
      name: "Ge0frey",
      email: "jeffkimzyjoe@gmail.com",
    },
    {
      id: "2",
      name: "Kimani",
      email: "kim@gmail.com",
    },
  ]
  return (
    <div className='ui container'>
      <Header/>
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  )
}

export default App;
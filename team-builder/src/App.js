import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data from './members-data';
import Member from './Components/memberList';
import Form from './Components/Form';


function App() {
  const [ members, setMembers ] = useState(data);
  console.log(members);
 
  const addNewMember = (member) =>{
    const newMember = { 
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
 
 
  return (
    <div className="App">
      <Member members={members}/>
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;

import react,{ useState } from 'react';

const Form =(props) => {
 const [ member, setMember ] = useState ({ name: "", email: "", role: ""});
 const eventChanger = (event) =>{
     setMember({ ...member, [event.target.name]: event.target.value});
 };   
 const submitForm =(event)=>{
     event.preventDefault();
     props.addNewMember(member);
     setMember({name: "", email: "", role: ""});
 };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name: </label>
            <input               
              name = 'name'
              type = 'text'
              placeholder = 'Enter Name'
              onChange = {eventChanger}
              value = {member.name}
              />
            
              <br/>
              
              <label htmlFor ='email'>Email: </label>
              <input              
              name = 'email'
              type = 'text'
              placeholder = 'Enter Email'
              onChange = {eventChanger}
              value = {member.email}/>
              
              <br/>
              
              <label htmlFor ='role'>Role: </label>
              <input               
              name = 'role'
              type = 'text'
              placeholder = 'Enter Role'
              onChange = {eventChanger}
              value = {member.role}/>
              
              <br/>

              <button type ='submit'>Add Member</button>
              
       </form>      
    );
};

export default Form;
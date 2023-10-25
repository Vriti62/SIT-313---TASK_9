import Input from "./input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword, createuserdocfromAuth } from './firebase';

function Signup() {
  const navigate = useNavigate(); 

  const [contact, setcontact] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = contact;
  

  async function handleClick(event) {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createuserdocfromAuth(user, { displayName });
      console.log(user);

      navigate('/login', { replace: true });
    } catch (error) {
      console.log('Error in creation', error.message);
    }
  }

  function handlepass(event) {
    const value = event.target.value;
    const name = event.target.name;

    setcontact((prevalue) => {
      return {
        ...prevalue,
        [name]: value
      };
    });
  }

  return (
    <div className="header">
      NAME:
      <Input
        className="input"
        name='displayName'
        type='text'
        placeholder='Name'
        onChange={handlepass}
      />
      
      <br></br>
      EMAIL:
      <Input
      className="input"
        name='email'
        type='email'
        placeholder='Email'
        onChange={handlepass}
      />

      <br></br>
      PASSWORD:
      <Input
      className="input"
        name='password'
        type='password'
        placeholder='Password'
        onChange={handlepass}
      />

      <br></br>
      CONFIRM:
      <Input
      className="input"
        name='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        onChange={handlepass}
      />

      <br></br>
      <button className = "login-button"  onClick={handleClick}>

      <Link to='/login'>Signup</Link></button>
      <br></br>

      <br></br>
      <Link to='/login'>Already have an account? Login</Link>
    </div>
  );
}

export default Signup;
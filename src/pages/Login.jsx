import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export const Login = () => {
  const navigate = useNavigate();
  const [err, seterr] = useState("");
  // const [success, setSuccess] = useState('')
  const [user, setuser]= useState({});
  const handleChange =(e)=>{
    setuser({...user,[e.target.name ]: e.target.value })
  }
  const { login} = useContext(AuthContext)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await login(user)
      navigate('/')
    } catch (error) {
      seterr(error.response.data);
    }
  }
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input onChange={handleChange} name='username' type="text" placeholder='username' />
        <input onChange={handleChange} name='password' type="password" placeholder='password' />
        <button type='submit' onClick={handleSubmit}>Login</button>
        <p>{err}</p>
        <span>Don't you gave an account? <Link to="/register">Register.</Link></span>
      </form>
    </div>
  )
}

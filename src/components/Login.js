import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/login', formData)
      localStorage.setItem('token', data.token)
      localStorage.setItem('email', data.user.email)
      console.log(data.token)
      console.log(data)

      if (data.user.isAdmin === true) {
        localStorage.setItem('admin', 'true')
      }
      navigate('/')
      alert("You have logged in successfully!")

    } catch (err) {
      console.log(err.response.data)
      alert("Log in failed- please try again")
    }
  }

  return <div className="section">
    <h2 className="title is-2">
      Login </h2>
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'password'}
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="button">Sign in</button>
        </form>
      </div>
    </div>
  </div>
}

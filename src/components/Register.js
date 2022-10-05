import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../config'

export default function Register() {
  // ! Using react router to navigate
  const navigate = useNavigate()
  // ! Put our form fields in state.
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  // !Errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  function handleChange(e) {
    // ! name: The field you've typed in, e.g. username/email/password.
    // ! value: the text that's in that field.
    // console.log(e)
    const { name, value } = e.target // ! This will get the name and value out of the event object. The name is the 'username' (example) and value is whatever's in the input.
    setFormData({
      ...formData, // ! This is whatever the form data was before, all its fields.
      [name]: value,
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${baseUrl}/register`, formData) //*axios is an interface over the fetch api, it gives you back a response object with data inside it.
      console.log(data)
      // ! Navigate to the /login page.
      navigate('/login')
      alert("You have now registered!")

    } catch (error) {
      // ! Print out the response form the backend if there's an error
      console.log(error)
      setErrors(error.response.data.errors)
    }
  }

  console.log(errors)

  return <div className="section">
    <h2 className="title is-2 has-text-centered">
      Register
    </h2>
    <div className="container">
      <div className="box">      
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'username'}
                // ! Adding these 2 fields means our component is 'controlled.'
                value={formData.username}
                onChange={handleChange}
              />
              {/* // ! Really nice custom error message */}
              {errors.username && <small className="has-text-danger">{errors.username}</small>}
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name={'email'}
                // ! Adding these 2 fields means our component is 'controlled.'
                value={formData.email}
                onChange={handleChange}
              />
              {/* // ! Really nice custom error message */}
              {errors.email && <small className="has-text-danger">{errors.email}</small>}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'password'}
                // ! Adding these 2 fields means our component is 'controlled.'
                value={formData.password}
                onChange={handleChange}
              />
              {/* // ! Really nice custom error message */}
              {errors.password && <small className="has-text-danger">{errors.password}</small>}
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name={'passwordConfirmation'}
                // ! Adding these 2 fields means our component is 'controlled.'
                value={formData.passwordConfirmation}
                onChange={handleChange}
              />
              {/* // ! Really nice custom error message */}
              {errors.passwordConfirmation && <small className="has-text-danger">{errors.passwordConfirmation}</small>}
            </div>
          </div>
          <button className="button">Submit</button>
        </form>
      </div>
    </div>
  </div>
}
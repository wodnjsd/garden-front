import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreatePlant() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    commonName: "",
    about: "",
    likes: "",
    size: "",
    image: "",
    price: "",
  })

  function handleChange(event) {
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData,
    }

    try {
      const { data } = await axios.post('/api/plants', newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data._id)
      navigate(`/plants/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {['name', 'commonName', 'about', 'likes', "size", "image", "price"].map(field => {
            return <div key={field} className="field">
              <label className="label">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}
          <button className="button mt-5 is-success">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePlant

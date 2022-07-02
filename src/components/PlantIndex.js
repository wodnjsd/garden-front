
import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from "../config"



function PlantIndex() {
  const [plant, setPlant] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${baseUrl}/plants`)
      const json = await res.json()
      setPlant(json)
    }
    getData()
  }, [])

  return <section className="section">
    <div className="container">
      <h2 className="title is-2 has-text-centered">All Plants</h2>
      <div className="columns is-multiline is-mobile">
        {plant.map((plant, index) => {
          return <div key={index} className="column is-one-quarter-desktop is-third-tablet is-half-mobile">
            <Link to={`/plants/${plant._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{plant.name}</p>
                      <p className="subtitle is-6">{plant.commonName}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-1by1">
                    <img src={plant.image} alt={plant.name} />
                  </figure>
                </div>
                <p className="subtitle is-6">{'Price: £' + plant.price}</p>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
    <footer className="has-text-left">
      <Link className="has-text-success-dark"
        to="/">← Return to home</Link>
    </footer>
  </section>
}

export default PlantIndex


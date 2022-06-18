
import React from 'react'
import { Link } from 'react-router-dom'


function PlantIndex() {
  const [plant, setPlant] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/plants')
      const json = await res.json()
      setPlant(json)
    }
    getData()
  }, [])

  return <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {plant.map((plant, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            <Link to={`/plants/${plant._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{plant.name}</p>
                      <p className="subtitle is-6">{'Common Name: ' + plant.commonName}</p>
                      <p className="subtitle is-6">{'About: ' + plant.about}</p>
                      <p className="subtitle is-6">{'This Plant Likes: ' + plant.likes}</p>
                      <p className="subtitle is-6">{'Size: ' + plant.size}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-4by3">
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
  </section>
}

export default PlantIndex


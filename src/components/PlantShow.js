import React from "react"
import { useParams } from "react-router-dom"

function PlantShow() {
  const [plant, setPlant] = React.useState(undefined)
  const { plantId } = useParams()

  React.useEffect(() => {
    fetch(`/api/plants/${plantId}`)
      .then(resp => resp.json())
      .then(data => setPlant(data))
  }, [plantId])

  console.log(plant)
  return (
    <section className="section">
      <div className="container">
        {plant ? (
          <div>
            <h2 className="title has-text-centered">{plant.name}</h2>
            <hr />
            <h3 className="title has-text-centered">{plant.commonName}</h3>
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={plant.image} alt={plant.name} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    ⭐️
                  </span>{" "}
                  About
                </h4>
                <p>{plant.about}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    ⚖️
                  </span>{" "}
                  The Plant Likes:
                </h4>
                <hr />
                <p>{plant.likes}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                    ⚖️
                  </span>{" "}
                  Size
                </h4>
                <hr />
                <p>{plant.size}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="wave">
                    🏋️‍♀️
                  </span>{" "}
                  Price
                </h4>
                <hr />
                <p>{"£" + plant.price}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
    </section>
  )
}

export default PlantShow

// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"
import IndoorPlantCareVideo from './PlantCareIndoorVideo'

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function PlantCareIndoor() {
  return (
    <>
      <div className="rows">

        {/* Article and Video */}
        <div className="row">
          <div className="columns is-multiline is-mobile">
            <div className="column is-half">
              <IndoorPlantCareVideo />
            </div>
            <div className="column is-half">
              <IndoorPlantCareVideo />
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="row">
          <Link to="/plantcare">
            <h1>Back</h1>
          </Link>
        </div>

      </div>
    </>
  )
}

// Line below: export Home so it can be imported and used in other .js files
export default PlantCareIndoor
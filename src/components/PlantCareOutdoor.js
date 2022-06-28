// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"
import OutdoorPlantCareVideo from './PlantCareOutdoorVideo'

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function PlantCareOutdoor() {
  return (
    <>
      <div className="rows">

        {/* Header */}
        <div className="row">
          <h1 className="title is-1 has-text-centered has-text-success-dark">
            Outdoor Plant Care
          </h1>
        </div>

        {/* Article and Video */}
        <div className="row">
          <div className="column is-full">
            {/* target="_blank" rel="noopener noreferrer" opens link in new window */}
            <h2 className="article-plant-care"><a href="https://www.patchplants.com/gb/en/read/plant-care/how-to-keep-your-outdoor-potted-plants-alive-1/" target="_blank" rel="noopener noreferrer">Article: Keeping Your Plants Alive</a></h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column is-full">
          <h2><OutdoorPlantCareVideo /></h2>
        </div>


        {/* Back Button */}
        <div className="row">
          <Link to="/plantcare">
            <h3>Back</h3>
          </Link>
        </div>

      </div>
    </>
  )
}

// Line below: export PlantCareOutdoor so it can be imported and used in other .js files
export default PlantCareOutdoor
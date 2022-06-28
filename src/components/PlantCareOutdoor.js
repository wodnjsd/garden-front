// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"
import OutdoorPlantCareVideo from './PlantCareOutdoorVideo'

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function PlantCareOutdoor() {
  return (
    <>
      <div>
        <h1>Outdoor</h1>
        <OutdoorPlantCareVideo />
        <Link to="/plantcare">
          {/* Line below: Indoor Plants tab*/}
          <h1>Back</h1>
        </Link>
      </div>
    </>
  )
}

// Line below: export Home so it can be imported and used in other .js files
export default PlantCareOutdoor
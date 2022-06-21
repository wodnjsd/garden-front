// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"

//Lines below: create Navbar function
// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <>
      {/* Lines below: Navbar is created in Header and has Home, Plants, Show Plant, Login, and Register tabs that link to the Home.js, PlantIndex.js, PlantShow.js, Login.js, and Register.js components. */}
      <header>
        {/* Lines below: "navbar is-dark", "container", "navbar-brand", "navbar-item" imports class names from bulma */}
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              {/*Line below: Link to="/" creates default page as Home page */}
              <Link to="/" className="navbar-item">
                {/* Line below: Home tab */}
                <h1>Home</h1>
              </Link>
              <Link to="/plants" className="navbar-item">
                {/* Line below: PlantIndex.js. tab */}
                <h1>Plants</h1>
              </Link>
              <Link to="/plantcare" className="navbar-item">
                {/* Line below: PlantCare.js tab */}
                <h1>Plant Care</h1>
              </Link>
              {/* Line below: Link to="/plants/:plantId" creates a link params variable that changes based on which plant name button we click on. Example: if we click on Cactus, the link will be /plants/cactus */}
              <Link to="/login" className="navbar-item">
                {/* Line below: Login.js tab */}
                <h1>Login</h1>
              </Link>
              <Link to="/register" className="navbar-item">
                {/* Line below: Register.js tab */}
                <h1>Register</h1>
              </Link>
              <Link to="/Cart" className="navbar-item">
                {/* Line below: Cart.js tab */}
                <h1>Cart</h1>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

// Line below: export Navbar so it can be used and imported in other .js files
export default Navbar

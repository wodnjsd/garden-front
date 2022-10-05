// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link, useLocation } from "react-router-dom"
import React from "react"
import { getLoggedInEmail } from "../lib/auth"


function Navbar() {

  const [loggedIn, setLoggedIn] = React.useState(false)
  const navigate = useLocation()

  React.useEffect(() => {
    setLoggedIn(getLoggedInEmail())
  }, [navigate])

  async function logOut() {
    localStorage.clear()

  }


  return (
    <>
      {/* Lines below: Navbar is created in Header and has Home, Plants, Show Plant, Login, and Register tabs that link to the Home.js, PlantIndex.js, PlantShow.js, Login.js, and Register.js components. */}
      <header>
        {/* Lines below: "navbar is-dark", "container", "navbar-brand", "navbar-item" imports class names from bulma */}
        <nav className="navbar is-light">
          <div className="container">
            <div className="navbar-start">
              {/*Line below: Link to="/" creates default page as Home page */}
              <Link to="/" className="navbar-item">
                {/* Line below: Home tab */}
                <h2>Home</h2>
              </Link>
              <Link to="/plants" className="navbar-item">
                {/* Line below: PlantIndex.js. tab */}
                <h2>Plants</h2>
              </Link>
              <Link to="/plantcare" className="navbar-item">
                {/* Line below: PlantCare.js tab */}
                <h2>Plant Care</h2>
              </Link>
              <Link to="/Questionnaire" className="navbar-item">
                <h2>Questionnaire</h2>
              </Link>
            </div>
            {/* Line below: Link to="/plants/:plantId" creates a link params variable that changes based on which plant name button we click on. Example: if we click on Cactus, the link will be /plants/cactus */}

            <div className="navbar-end">
              {(localStorage.getItem('admin') === 'true') &&
                <Link to="/createplant" className="navbar-item">
                  {/* Line below: Cart.js tab */}
                  <h2>Create Plant</h2>
                </Link>}

              <Link to="/Cart" className="navbar-item">
                {/* Line below: Cart.js tab */}
                <h2>Cart</h2>
              </Link>
              {!loggedIn && <Link to="/login" className="navbar-item">
                {/* Line below: Login.js tab */}
                <h2>Login</h2>
              </Link>}
              {loggedIn && <Link to="/" className="navbar-item"
                onClick={logOut}>
                <h2>Logout</h2>
              </Link>}
              <Link to="/register" className="navbar-item">
                {/* Line below: Register.js tab */}
                <h2>Register</h2>
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

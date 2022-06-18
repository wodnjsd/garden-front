// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"

//Lines below: create Navbar function
// ! The one difference in this navigation, are the Link components.
function Navbar() {
  return (
    <>
    {/* Lines below: Navbar is created in Header and has Home, Characters, Show Character, Favourite Character tabs that link to the Home, Characters, Show Character, Favourite Character components. */}
      <header>
        {/* Lines below: "navbar is-dark", "container", "navbar-brand", "navbar-item" imports class names from bulma */}
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-brand">
              {/*Line below: Link to="/" creates default page as Home page */}
              <Link to="/" className="navbar-item">
                {/* Line below: Home tab, imports class name "home" from main.scss */}
                <h1 id="home">Home</h1> 
              </Link>
              <Link to="/characters" className="navbar-item">
              {/* Line below: Characters tab, imports class name "characters" from main.scss */} 
              <h1 id="characters">Characters</h1>
              </Link>
              {/* Line below: Link to="/characters/:showcharacters" creates a link params variable that changes based on which character name button we click on. Example: if we click on Dobby, the link will be /characters/dobby */}
              <Link to="/characters/:showcharacters" className="navbar-item">
              {/* Line below: Show Character tab, imports class name "showcharacter" from main.scss */}
              <h1 id="showcharacter">Show Character</h1>
              </Link>
              <Link to="/favourites" className="navbar-item">
              {/* Line below: Favourite Characters tab, imports class name "favouritecharacter" from main.scss */}
              <h1 id="favouritecharacter">Favourite Characters</h1>
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

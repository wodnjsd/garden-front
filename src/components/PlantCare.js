// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function PlantCare() {
  return (
    <>
      <div className="rows">


        <div className="row">
        <h3 className="title is-1 has-text-centered">
            Show your plant purchase some TLC
          </h3>
        </div>


        <div className="row">
          <div className="columns is-multiline is-mobile">
            <div className="column is-half">
              <Link to="/plantcare/indoor">
                <h2 className="link-plant-care">Indoor Plants</h2>
              </Link>
            </div>
            <div className="column is-half">
              <Link to="/plantcare/outdoor">
                <h2 className="link-plant-care">Outdoor Plants</h2>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

// Line below: export PlantCare so it can be imported and used in other .js files
export default PlantCare




// const OutdoorPlantCare = () => {

//   const [isOpen, setOpen] = useState(false)

//   return (
//     <React.Fragment>
//       <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="o8XZVp0Hwl4" onClose={() => setOpen(false)} />

//       <button className="btn-primary" onClick={() => setOpen(true)}>Outdoor plants</button>
//     </React.Fragment>
//   )
// }

// ReactDOM.render(
//   <OutdoorPlantCare />,
//   document.getElementById('root')
// )

// export default {
//   IndoorPlantCare,
//   OutdoorPlantCare,
// }









// import React from 'react'
// import ReactDOM from 'react-dom'
// import ModalVideo from 'react-modal-video'

// class PlantCare extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       isOpen: false,
//     }
//     this.openModal = this.openModal.bind(this)
//   }

//   openModal() {
//     this.setState({ isOpen: true })
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='o8XZVp0Hwl4' onClose={() => this.setState({ isOpen: false })} />
//         <button onClick={this.openModal}>1</button>

//         <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({ isOpen: false })} />
//         <button onClick={this.openModal}>2</button>
//       </React.Fragment>
//     )
//   }
// }

// ReactDOM.render(
//   <PlantCare />,
//   document.getElementById('root')
// )

// export default {
//   PlantCare,
// }
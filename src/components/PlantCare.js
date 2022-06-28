// Line below: import { Link } allows you to use link component for us to link all the components together inside the Navbar
import { Link } from "react-router-dom"
// import React runs react
import React from "react"

//Lines below: Creates function Home. IDs homepage-background, homepage, title, and subtitle refer to CSS created in main.scss
function PlantCare() {
  return (
    <>
      <div>
        <h2>Instructional videos on how you can show your plant purchase some TLC!</h2>
        <Link to="/plantcare/indoor">
          {/* Line below: Indoor Plants tab*/}
          <h1>Indoor Plants</h1>
        </Link>
        <Link to="/plantcare/outdoor">
          {/* Line below: Outdoor Plants tab*/}
          <h1>Outdoor Plants</h1>
        </Link>
      </div>
    </>
  )
}

// Line below: export Home so it can be imported and used in other .js files
export default PlantCare


// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import ModalVideo from 'react-modal-video'

// const IndoorPlantCare = () => {

//   const [isOpen, setOpen] = useState(false)

//   return (
//     <React.Fragment>
//       <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="bZqJNfZoKRA" onClose={() => setOpen(false)} />

//       <button className="btn-primary" onClick={() => setOpen(true)}>Indoor plants</button>

//     </React.Fragment>
//   )
// }

// ReactDOM.render(
//   <IndoorPlantCare />,
//   document.getElementById('root')
// )


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
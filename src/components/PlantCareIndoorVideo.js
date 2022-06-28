import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'



const IndoorPlantCareVideo = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="bZqJNfZoKRA" onClose={() => setOpen(false)} />

      <button className="btn-plant-care" onClick={() => setOpen(true)}>Watch a video on Indoor Plant Care</button>
    </React.Fragment>
  )
}



ReactDOM.render(
  <IndoorPlantCareVideo />,
  document.getElementById('root')
)


export default IndoorPlantCareVideo


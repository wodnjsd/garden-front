import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'



const OutdoorPlantCareVideo = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="o8XZVp0Hwl4" onClose={() => setOpen(false)} />

      <button className="btn-primary" onClick={() => setOpen(true)}>Watch a video on Outdoor Plant Care</button>
    </React.Fragment>
  )
}



ReactDOM.render(
  <OutdoorPlantCareVideo />,
  document.getElementById('root')
)


export default OutdoorPlantCareVideo


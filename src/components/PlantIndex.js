
import React from 'react'

function PlantIndex() {
  const [plant, setPlant] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/plants')
      const json = await res.json()
      setPlant(json)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <h1 className="title">Plant Index</h1>
      <div className="container">
        {plant.map(plant => <h2 key={plant._id}>{plant.name}</h2>)}
      </div>
    </div>
  )
}

export default PlantIndex


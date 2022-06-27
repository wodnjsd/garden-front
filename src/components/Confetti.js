import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

// eslint-disable-next-line react/display-name
function PlantConfetti() {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
      colors={
        ['#237F42',
          '#27C55C',
          '#238346',
          '#8DBB82',
          '#6CB903',
          '#DCB224',
          '#956B1D'
        ]
      }
    />
  )
}

export default PlantConfetti
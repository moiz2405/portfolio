// components/MovingPokemon.js

import { useEffect, useState } from 'react'
import Image from 'next/image'

const MovingPokemon = () => {
  const [position, setPosition] = useState(0)

  // Animate Pokémon movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 5) % window.innerWidth)  // Loop across the window width
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <Image
        src="/images/pokemon/pikachu.png"  // Path to your Pokémon image
        alt="Pixelated Pokémon"
        width={50}
        height={50}
        className="absolute"
        style={{
          left: `${position}px`,
          transition: 'left 0.1s linear',
        }}
      />
    </div>
  )
}

export default MovingPokemon

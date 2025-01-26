// 'use client'

// import React, { useEffect, useRef } from 'react'

// const pokemonSprites = [
//   '/images/pokemon/pikachu.png',
//   '/images/pokemon/charmander.png',
//   '/images/pokemon/squirtle.png',
//   '/images/pokemon/bulbasaur.png',
// ]

// interface PixelPokemonProps {
//   width: number
//   height: number
// }

// const PixelPokemon: React.FC<PixelPokemonProps> = ({ width, height }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const pokemon: { x: number; y: number; dx: number; dy: number; sprite: HTMLImageElement }[] = []

//     const createPokemon = () => {
//       const sprite = new Image()
//       sprite.src = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)]
//       sprite.onload = () => {
//         pokemon.push({
//           x: Math.random() * width,
//           y: Math.random() * height,
//           dx: (Math.random() - 0.5) * 2,
//           dy: (Math.random() - 0.5) * 2,
//           sprite,
//         })
//       }
//     }

//     for (let i = 0; i < 5; i++) {
//       createPokemon()
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height)

//       pokemon.forEach((p) => {
//         p.x += p.dx
//         p.y += p.dy

//         if (p.x < 0 || p.x > width - 32) p.dx *= -1
//         if (p.y < 0 || p.y > height - 32) p.dy *= -1

//         ctx.drawImage(p.sprite, p.x, p.y, 32, 32)
//       })

//       requestAnimationFrame(animate)
//     }

//     animate()
//   }, [width, height])

//   return <canvas ref={canvasRef} width={width} height={height} className="w-full h-full" />
// }

// export default PixelPokemon


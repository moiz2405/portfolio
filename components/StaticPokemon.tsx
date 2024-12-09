import Image from 'next/image'

const pokemonGifs = [
  '/images/pokemon/pikachu.gif',
  '/images/pokemon/charmander.gif',
  '/images/pokemon/squirtle.gif',
  '/images/pokemon/bulbasaur.gif',
]

export default function StaticPokemon() {
  return (
    <div className="flex justify-center space-x-2 my-4">
      {pokemonGifs.map((gif, index) => (
        <Image
          key={index}
          src={gif}
          alt={`Pokemon ${index + 1}`}
          width={40}
          height={40}
          className="pixelated"
        />
      ))}
    </div>
  )
}


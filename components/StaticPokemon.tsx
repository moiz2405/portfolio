import Image from 'next/image';

const pokemonGifs = [
  { gif: '/images/pokemon/pikachu.gif', sound: '/sounds/pika.mp3' },
  { gif: '/images/pokemon/charmander.gif', sound: '/sounds/char.mp3' },
  { gif: '/images/pokemon/squirtle.gif', sound: '/sounds/squir.mp3' },
  { gif: '/images/pokemon/bulbasaur.gif', sound: '/sounds/bulba.mp3' },
];

export default function StaticPokemon() {
  const handleHover = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="flex justify-center space-x-2 my-4">
      {pokemonGifs.map((pokemon, index) => (
        <Image
          key={index}
          src={pokemon.gif}
          alt={`Pokemon ${index + 1}`}
          width={40}
          height={40}
          className="pixelated cursor-pointer"
          onMouseEnter={() => handleHover(pokemon.sound)}
        />
      ))}
    </div>
  );
}

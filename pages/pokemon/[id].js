import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from '../../src/Layout/Layout';
function Pokemons({ pokemon, image }) {
  const router = useRouter();
  //const { abilities } = pokemon;
  console.log(pokemon);
  return (
    <Layout>

      <span className='back' onClick={() => router.back()}>Back</span>
      <div className='pokemon__name'>
        <h1>{pokemon.name}</h1>
      </div>
      <div className="pokemon__card">
        <div className="pokemon__image">
          <Image src={image} alt={pokemon.name} width={200} height={200} />
        </div>
        <div className="pokemon__specs">
          <h2>Specs:</h2>
          <p>Height: {pokemon.height} </p>
          <p>weight: {pokemon.weight} </p>
        </div>
        <div className="pokemon__types">
          <h2>Types:</h2>
          {pokemon.types.map(({ type }, index) => (
            <p key={index}>{type.name}</p>
          ))}
        </div>
        <div className="pokemon__abilities">
          <h2>Abilities:</h2>
          {pokemon.abilities.map(({ ability }, index) => (
            <p key="index">{ability.name}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Pokemons;

export async function getServerSideProps({ query }) {
  const id = query.id;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  const imgid = ('00' + id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgid}.png`;
  return {
    props: { pokemon, image },
  };
}

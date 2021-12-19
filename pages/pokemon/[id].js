import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from '../../src/Layout/Layout';
function Pokemons({ pokemon, image }) {
  const router = useRouter();
  console.log(pokemon);
  return (
    <Layout>
      <div>
        <h2 onClick={() => router.push('/')}> Home</h2>
      </div>
      {pokemon.name}
      <Image src={image} alt={pokemon.name} width={400} height={400} />
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

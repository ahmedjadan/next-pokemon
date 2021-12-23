import { useState } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../src/Layout/Layout';
import Card from '../src/components/Card';
import SearchPoke from '../src/components/SearchPoke';

export default function Home({ pokemon }) {
  const [poke, setPoke] = useState('');

  const handlePokeSearch = (e) => {
    e.preventDefault();
    setPoke(e.target.value.toLowerCase());
  };

  const pokemonFound = pokemon?.filter((pokeman) =>
    pokeman?.name?.toLowerCase().includes(poke)
  );
  return (
    <Layout>
      <Head>
        <title>Pokemon App</title>
        <meta name="description" content="pokemon App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <SearchPoke onChange={handlePokeSearch} placeholder="search pokemon" />
        <Card pokemon={pokemonFound} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  const { results } = await res.json();
  const pokemon = results?.map((pokemon, index) => {
    const imgid = ('00' + (index + 1)).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgid}.png`;
    return { ...pokemon, image };
  });
  return {
    props: {
      pokemon,
    },
  };
}

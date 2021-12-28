import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';
function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <ul>
        {pokemon.map((poke, idx) => (
          <li key={idx}>
            <Link href={`/pokemon/${poke.name}`}>
              <a className={styles.list}>
                <Image
                  src={poke.image}
                  width={100}
                  height={100}
                  alt={poke.name}
                />
                <h2>{poke.name}</h2>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;

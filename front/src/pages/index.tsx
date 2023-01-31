import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Carros usados | Comprar carros usados</title>
      </Head>
      <main className={styles.container}>
        <div>
          <input
            type='text'
            name=''
            id=''
            placeholder='Busque por marca ou modelo'
          />
        </div>
      </main>
    </>
  );
}

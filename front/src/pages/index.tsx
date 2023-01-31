import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.scss';
import { fetchFromApi } from '../lib/axios';
import Image from 'next/image';
import { useState } from 'react';

interface Car {
  id: string;
  name: string;
  marca: string;
  modelo: string;
  value: number;
  foto: string;
}

interface HomeProps {
  cars: Car[];
}

export default function Home({ cars }: HomeProps) {
  const [carApi, setCarApi] = useState<Car[]>(
    cars.sort((a, b) => a.value - b.value)
  );
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
      {carApi.map((car) => {
        return (
          <div key={car.id}>
            <h1>{car.name}</h1>
            <h2>{car.marca}</h2>
            <h3>{car.modelo}</h3>
            <h4>{car.value}</h4>
            <Image src={car.foto} alt={car.name} width={100} height={100} />
          </div>
        );
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await fetchFromApi.get('/cars');

  return {
    props: {
      cars: data,
    },
  };
};

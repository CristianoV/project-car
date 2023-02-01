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
          <button
            className='btn btn-secondary'
            type='button'
            id='button-addon2'
          >
            Pesquise
          </button>
        </div>
      </main>
      <section className={styles.cars}>
      {carApi.map((car) => {
        return (
            <div className={`card ${styles.carsImage}`} key={car.id}>
              <img src={car.foto} className='card-img-top' alt={car.name} />
              <div className='card-body'>
                <h5 className='card-title'>{car.name}</h5>
                <p className='card-text'>
                  {car.marca} • {car.modelo} • R$ {car.value}
                </p>
                <a href='#' className='btn btn-primary'>
                  Detalhes
                </a>
              </div>
          </div>
        );
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data } = await fetchFromApi.get('/cars');
  const token = req.cookies.token || '';

  return {
    props: {
      cars: data,
      token,
    },
  };
};

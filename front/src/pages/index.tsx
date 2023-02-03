import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.scss';
import { fetchFromApi } from '../lib/axios';
import { useState } from 'react';
import Image from 'next/image';

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
  const [nameCar, setNameCar] = useState('');
  const priceFormat = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCar(e.target.value);
  };

  const filteredCars = nameCar
    ? cars.filter((car) =>
        car.name.toLowerCase().includes(nameCar.toLowerCase())
      )
    : cars;

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
            placeholder='Busque por um carro'
            value={nameCar}
            onChange={handleFilter}
          />
        </div>
      </main>
      <section className={styles.cars}>
        {filteredCars.map((car) => {
          return (
            <div className={`card ${styles.carsImage}`} key={car.id}>
              <Image src={`https://${car.foto}`} width={200} height={200} alt={car.name} />
              <div className='card-body'>
                <h5 className='card-title'>{car.name}</h5>
                <p className='card-text'>{car.marca}</p>
                <p className='card-text'>{car.modelo}</p>
                <p className='card-text'>
                  {priceFormat.format(car.value / 100)}
                </p>
                <a href='#' className='btn btn-primary'>
                  Detalhes
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const { data } = await fetchFromApi.get('/cars');
    const token = req.cookies.token || '';

    return {
      props: {
        cars: data || [],
        token,
      },
    };
  } catch (error) {
    return {
      props: {
        cars: [],
      },
    };
  }
};

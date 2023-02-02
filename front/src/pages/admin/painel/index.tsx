/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchFromApi } from '../../../lib/axios';
import styles from './styles.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

interface Car {
  id: string;
  name: string;
  marca: string;
  modelo: string;
  value: number;
  foto: string;
}

export default function AdminFormDel() {
  const [nameCar, setNameCar] = useState('');
  const [cars, setCars] = useState<Car[]>([]);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const getCars = async () => {
      const { data } = await fetchFromApi.get('/cars');
      setCars(data.sort((a: Car, b: Car) => a.name.localeCompare(b.name)));
    };
    getCars();
  }, []);

  const handleDelete = async (id: any) => {
    await fetchFromApi.delete(`/cars/${String(id)}`);
    setCars(cars.filter((car) => car.id !== id));
    handleAlert();
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameCar(e.target.value);
  };

  const filteredCars = nameCar
    ? cars.filter((car) =>
        car.name.toLowerCase().includes(nameCar.toLowerCase())
      )
    : cars;

  const handleAlert = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };
  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Qual o nome do carro?'
        value={nameCar}
        onChange={handleFilter}
      ></input>
      {popUp && (
        <div
          className={`alert alert-success ${styles.message} ${styles.visible}`}
          role='alert'
        >
          Deletado com sucesso!
        </div>
      )}
      <div>
        {filteredCars.map((car) => (
          <div className={`card ${styles.images}`} key={car.id}>
            <img src={car.foto} className='card-img-top' alt={car.name} />
            <div className='card-body'>
              <h5 className='card-title'>{car.name}</h5>
              <h5 className='card-title'>{car.marca}</h5>
              <h5 className='card-title'>{car.modelo}</h5>
              <h5 className='card-title'>
                {priceFormat.format(car.value / 100)}
              </h5>
              <button
                className='btn btn-primary'
                onClick={() => handleDelete(car.id)}
              >
                <AiFillDelete /> Delete
              </button>
              <Link href={`painel/${car.id}`} className='btn btn-primary'>
                <FiEdit /> Editar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token || '';
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  const { data } = await fetchFromApi.get('/verify', {
    headers: {
      Authorization: token,
    },
  });

  if (data.nivel !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      token,
      user: data,
    },
  };
};

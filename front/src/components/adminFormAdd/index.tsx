import { useState } from 'react';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

export default function AdminFormAdd() {
  const [newCar, setNewCar] = useState({
    name: '',
    marca: '',
    value: '',
    modelo: '',
    file: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await fetchFromApi.post('/cars', newCar, headers);
    setNewCar({
      name: '',
      marca: '',
      value: '',
      modelo: '',
      file: '',
    });
  };
  return (
    <div className={styles.container}>
      <h1>Adicionar carro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
          Nome:
          <input
            type='text'
            name='name'
            id=''
            value={newCar.name}
            onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
          />
        </label>
        <label htmlFor=''>
          Marca:
          <input
            type='text'
            name='marca'
            id=''
            value={newCar.marca}
            onChange={(e) => setNewCar({ ...newCar, marca: e.target.value })}
          />
        </label>
        <label htmlFor=''>
          Valor:
          <input
            type='number'
            name='value'
            id=''
            value={newCar.value}
            onChange={(e) => setNewCar({ ...newCar, value: e.target.value })}
          />
        </label>
        <label htmlFor=''>
          Modelo:
          <input
            type='text'
            name='modelo'
            id=''
            value={newCar.modelo}
            onChange={(e) => setNewCar({ ...newCar, modelo: e.target.value })}
          />
        </label>
        <label htmlFor=''>
          Imagem:
          <input
            type='file'
            name='image'
            id=''
            onChange={(e) => setNewCar({ ...newCar, file: e.target.files[0] })}
          />
        </label>
        <button type='submit'>Adicionar</button>
      </form>
    </div>
  );
}
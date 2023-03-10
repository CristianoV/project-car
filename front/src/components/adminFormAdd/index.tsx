import { useState } from 'react';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

interface AdminFormAddProps {
  token: string;
}

export default function AdminFormAdd({ token }: AdminFormAddProps) {
  const [newCar, setNewCar] = useState({
    name: '',
    marca: '',
    value: '',
    modelo: '',
    file: {},
  });
  const [popUp, setPopUp] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };

      await fetchFromApi.post('/cars', newCar, headers);
      setNewCar({
        name: '',
        marca: '',
        value: '',
        modelo: '',
        file: {},
      });
      handleAlertSuccess();
    } catch (error) {
      handleAlertError();
    }
  };

  const handleAlertError = () => {
    setError(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };

  const handleAlertSuccess = () => {
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  };
  return (
    <div className={styles.container}>
      <h1>Adicionar carro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>
          Nome:
          <input
            required
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
            required
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
            required
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
            required
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
            required
            type='file'
            name='image'
            id=''
            onChange={(e) => {
              if (e.target.files) {
                setNewCar({ ...newCar, file: e.target.files[0] });
              }
            }}
          />
        </label>
        {error && (
          <div
            className={`alert alert-danger ${styles.message} ${styles.visible}`}
            role='alert'
          >
            Erro no servidor!
          </div>
        )}
        {popUp && (
          <div
            className={`alert alert-success ${styles.message} ${styles.visible}`}
            role='alert'
          >
            Novo Carro adicionado com sucesso!
          </div>
        )}
        <button type='submit'>Adicionar</button>
      </form>
    </div>
  );
}

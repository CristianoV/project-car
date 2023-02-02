import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { fetchFromApi } from '../../../lib/axios';
import styles from './styles.module.scss';

interface Car {
  id: string;
  name: string;
  marca: string;
  modelo: string;
  value: number;
  foto: string;
}

interface ICarEdit {
  id: string;
  car: Car;
}

const ImagePreview: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <img src={imageUrl} className='card-img-top' alt='Car' />
);

export default function AdminFormDel({ id, car }: ICarEdit) {
  const [form, setForm] = useState<Car>({ ...car });
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const headers = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await fetchFromApi.put(`/cars/${id}`, { ...form, file: image }, headers);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={styles.imageContainer}>
      <ImagePreview imageUrl={image ? URL.createObjectURL(image) : car.foto} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome:</label>
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='brand'>Marca:</label>
          <input
            type='text'
            name='marca'
            value={form.marca}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='value'>Modelo:</label>
          <input
            type='text'
            name='modelo'
            value={form.modelo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='value'>Valor:</label>
          <input
            type='number'
            name='value'
            value={form.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='value'>Foto:</label>
          <input
            type='file'
            name='foto'
            onChange={(event) => {
              if (event.target.files) {
                setImage(event.target.files[0]);
              }
            }}
          />
        </div>
        <button type='submit'>Salvar</button>
      </form>
    </div>
  );
}

interface params {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const token = req.cookies.token || '';
  const { data: verifyToken } = await fetchFromApi.get('/verify', {
    headers: {
      Authorization: token,
    },
  });

  if (verifyToken.nivel !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const { id } = params as unknown as params;
  const { data } = await fetchFromApi.get(`/cars/${String(id)}`);

  return {
    props: {
      id,
      car: data,
      token,
    },
  };
};

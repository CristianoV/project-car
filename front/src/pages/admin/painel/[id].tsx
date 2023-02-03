import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { fetchFromApi } from '../../../lib/axios';
import styles from './styles[id].module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
  token: string;
}

const ImagePreview: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <Image
    src={imageUrl}
    className='card-img-top'
    alt='Car'
    placeholder='blur'
    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
  />
);

export default function AdminFormDel({ id, car, token }: ICarEdit) {
  const [form, setForm] = useState<Car>({ ...car });
  const [image, setImage] = useState<File | null>(null);
  const [popUp, setPopUp] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      };
      await fetchFromApi.put(`/cars/${id}`, { ...form, file: image }, headers);
      handleAlertSuccess();
    } catch (error) {
      handleAlertError();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
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
      <Link href='/admin/painel'>Continuar editando</Link>
      <ImagePreview imageUrl={image ? URL.createObjectURL(image) : car.foto} />
      <form onSubmit={handleSubmit}>
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
            Editado com sucesso!
          </div>
        )}
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
  try {
    const token = req.cookies.token || '';
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
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
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

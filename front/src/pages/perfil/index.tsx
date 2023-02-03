import { GetServerSideProps } from 'next';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

interface User {
  user: {
    id: string;
    nivel: string;
    name: string;
  };
}

export default function Perfil({ user }: User) {
  return (
    <div className={styles.container}>
      <h1>Bem vindo {user.name}</h1>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}/files/avatar.png`} alt='' />
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

  if (data.nivel === 'admin') {
    return {
      redirect: {
        destination: '/admin',
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

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

interface User {
  user: {
    id: string;
    level: string;
    name: string;
  };
}

export default function Perfil({ user }: User) {
  return (
    <div className={styles.container}>
      <h1>Bem vindo {user.name}</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_URL}files/avatar.png`}
        alt={user.name}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
    const { data } = await fetchFromApi.get('/verify', {
      headers: {
        Authorization: token,
      },
    });

    if (data.level === 'admin') {
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
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

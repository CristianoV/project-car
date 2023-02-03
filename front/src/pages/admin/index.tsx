import { GetServerSideProps } from 'next';
import Link from 'next/link';
import AdminFormAdd from '../../components/adminFormAdd';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

interface AdminProps {
  token: string;
}

export default function Admin({ token }: AdminProps) {
  return (
    <div className={styles.container}>
      <AdminFormAdd token={token} />
      <div>
        <h1>Filtros ADM</h1>
        <Link href='/admin/painel'>Editar/Excluir</Link>
      </div>
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
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

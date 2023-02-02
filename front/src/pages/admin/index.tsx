import { GetServerSideProps } from 'next';
import Link from 'next/link';
import AdminFormAdd from '../../components/adminFormAdd';
import { fetchFromApi } from '../../lib/axios';
import styles from './styles.module.scss';

export default function Admin() {
  return (
    <div className={styles.container}>
      <AdminFormAdd />
      <div>
        <h1>Filtros ADM</h1>
        <Link href='/admin/painel'>Deletar</Link>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token || '';
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

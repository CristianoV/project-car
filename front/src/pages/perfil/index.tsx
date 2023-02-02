import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { fetchFromApi } from '../../lib/axios';

interface User {
  user: {
    id: string;
    nivel: string;
    name: string;
  };
}

export default function Perfil({ user }: User) {
  return (
    <div>
      <h1>Bem vindo {user.name}</h1>
      {user.nivel === 'admin' && <Link href='/admin'>Admin</Link>}
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

  return {
    props: {
      token,
      user: data,
    },
  };
};

import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Admin from '../../components/admin';
import { fetchFromApi } from '../../lib/axios';

interface User {
  user: {
    id: string;
    nivel: string;
    name: string;
  };
}

export default function Perfil({ user }: User) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/logout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
  };
  return (
    <div>
      <h1>Perfil</h1>
      <p>Nome: {user.name}</p>
      {user.nivel === 'admin' && <Admin />}
      <button onClick={(e) => handleSubmit(e)}>Sair</button>
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

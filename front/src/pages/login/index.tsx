import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import loginImage from '../../../public/login-customer.jpg';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchFromApi } from '../../lib/axios';
import { GetServerSideProps } from 'next';

export default function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await fetchFromApi.post('/login', {
        name: user,
        password: password,
      });

      if (data.token) {
        await fetch('/api/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPassword('');
      setUser('');
    }
  };

  return (
    <>
      <Head>
        <title>Conecte-se | Venha comprar com a gente!</title>
      </Head>
      <section className={styles.container}>
        <Image
          src={loginImage}
          alt='Login'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
        />
        <article>
          <h1>Inicie sessão</h1>
          <h3>Adicione um usuario e uma senha!</h3>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Usuario'
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Entrar</button>
          </form>
          <h3>
            Ainda não tem uma conta? <Link href='/register'>Registre-se</Link>
          </h3>
        </article>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token || '';

  if (token) {
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
    },
  };
};

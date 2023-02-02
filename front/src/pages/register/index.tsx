import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import registerImage from '../../../public/register-customer.jpg';
import Head from 'next/head';
import { fetchFromApi } from '../../lib/axios';
import { useRouter } from 'next/router';

export default function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await fetchFromApi.post('/register', {
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
        <title>Registre-se | Faça a sua conta!</title>
      </Head>
      <section className={styles.container}>
        <Image
          src={registerImage}
          alt='Login'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN0vQgAAWEBGHsgcxcAAAAASUVORK5CYII='
        />
        <article>
          <h1>Crie sua conta</h1>
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
            Já tem uma conta cadastrada?
          </h3>
          <Link href='/login'>Conecte-se</Link>
        </article>
      </section>
    </>
  );
}

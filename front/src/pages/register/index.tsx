import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(user, password);
    setPassword('');
    setUser('');
  };

  return (
    <section className={styles.container}>
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
          Já tem uma conta cadastrada? <Link href='/login'>Conecte-se</Link>
        </h3>
      </article>
    </section>
  );
}

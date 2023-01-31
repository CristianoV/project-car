import styles from './styles.module.scss';
import Link from 'next/link';
import { RiAccountCircleLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>Carros</h1>
      <div>
        <nav>
          <Link href='/'>Comprar Carro</Link>
          <Link href='/'>Vender Carro</Link>
          <Link href='/'>APP Kavak</Link>
          <Link href='/'>Sobre nós</Link>
          <Link href='/'>Brasil</Link>
          <Link href='/login'>
            <RiAccountCircleLine />
            Conecte-se
          </Link>
        </nav>
        <div className={styles.dropdown}>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <AiOutlineMenu />
            </a>
            <ul className='dropdown-menu'>
              <li>
                <Link href='/'>Comprar Carro</Link>
              </li>
              <li>
                <Link href='/'>Vender Carro</Link>
              </li>
              <li>
                <Link href='/'>APP Kavak</Link>
              </li>
              <li>
                <Link href='/'>Sobre nós</Link>
              </li>
              <li>
                <Link href='/'>Brasil</Link>
              </li>
              <li>
                <Link href='/login'>
                  <RiAccountCircleLine />
                  Conecte-se
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </div>
    </header>
  );
}

import styles from './styles.module.scss'
import Link from 'next/link'
import { RiAccountCircleLine } from 'react-icons/ri';


export default function Header() {
  return (
    <header className={styles.container}>
      <h1>Carros</h1>
      <nav>
        <Link href="/">
          Comprar Carro
        </Link>
        <Link href="/">
          Vender Carro
        </Link>
        <Link href="/">
          APP Kavak
        </Link>
        <Link href="/">
          Sobre nós
        </Link>
        <Link href="/">
          Brasil
        </Link>
        <Link href="/">
          <RiAccountCircleLine />
          Cadastre-se
        </Link>
      </nav>
    </header>
  )
}
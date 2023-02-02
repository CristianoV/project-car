import Link from 'next/link';
import AdminFormAdd from '../adminFormAdd';
// import AdminFormDel from "../../pages/adminFormDel";
import styles from './styles.module.scss';

export default function Admin() {
  return (
    <div className={styles.container}>
      <AdminFormAdd />
      <div>
        <h1>Filtros ADM</h1>
        <Link href='/admindel'>Deletar</Link>
      </div>
    </div>
  );
}

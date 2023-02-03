import styles from './styles.module.scss';

interface IUsernameProps {
  username: string;
}

export default function ValidateUsername({ username }: IUsernameProps) {
  return (
    <div className={styles.container}>
      <h3 className={username.length > 3 ? styles.correct : styles.wrong}>
        3 caracteres
      </h3>
    </div>
  );
}

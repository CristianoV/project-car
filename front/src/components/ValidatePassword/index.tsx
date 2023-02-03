import styles from './styles.module.scss';

interface ValidatePasswordProps {
  password: string;
}

export default function ValidatePassword({ password }: ValidatePasswordProps) {
  return (
    <div className={styles.container}>
      <h3 className={password.length >= 8 ? styles.correct : styles.wrong}>
        8 caracteres
      </h3>
      <h3 className={password.match(/[A-Z]/) ? styles.correct : styles.wrong}>
        1 letra maiúscula
      </h3>
      <h3 className={password.match(/[a-z]/) ? styles.correct : styles.wrong}>
        1 letra minúscula
      </h3>
      <h3 className={password.match(/[0-9]/) ? styles.correct : styles.wrong}>
        1 número
      </h3>
    </div>
  );
}

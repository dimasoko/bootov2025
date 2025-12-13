import styles from './BigLogo.module.css';

const BigLogo = () => {
  return (
    <screaming className={styles.screaming}>
      <div className={styles.logo}>
        <img src="/BigLogo.svg" alt="Лого биг" />
      </div>
      <div className={styles.screamingText}>
        <h1>БИДОН CLUB</h1>
      </div>
    </screaming>
  );
};

export default BigLogo;
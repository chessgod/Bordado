import styles from './HomePage.module.css';
import chrisCard from '../../Images/cardChris.jpg';

function HomePage() {
  return (
    <body className={styles.HomePage}>
      <div className={styles.Card}>
        <img className={styles.cardImage} src={chrisCard}></img>
      </div>
      <div className={styles.ProductsWrapper}>
        <div className={styles.Product}>

        </div>
        <div className={styles.Product}>

        </div>
        <div className={styles.Product}>

        </div>
      </div>
    </body>
  );
}

export default HomePage;
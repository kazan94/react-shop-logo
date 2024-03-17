import styles from './Card.module.scss';

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src="/img/heart-unliked.svg"
          alt="Добавить в избранное"
        />
      </div>
      <div className={styles.cardImgContainer}>
        <img src={props.urlImg} alt="Логотип" />
      </div>
      <p className={styles.cardName}>{props.title}</p>
      <div className={styles.cardPriceAndAdd}>
        <div>
          <p>ЦЕНА:</p>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={() => alert(1)}>
          <img src="/img/plus.svg" alt="Добавить в корзину" />
        </button>
      </div>
    </div>
  );
}

export default Card;

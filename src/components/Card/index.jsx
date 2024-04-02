import React from 'react';
import styles from './Card.module.scss';

function Card({ urlImg, price, title, onClickAddCart }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickAction = () => {
    setIsAdded(!isAdded);
    onClickAddCart({ urlImg, price, title });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Добавить в избранное" />
      </div>
      <div className={styles.cardImgContainer}>
        <img src={urlImg} alt="Логотип" />
      </div>
      <p className={styles.cardName}>{title}</p>
      <div className={styles.cardPriceAndAdd}>
        <div>
          <p>ЦЕНА:</p>
          <b>
            {price} руб.
          </b>
        </div>
        <button onClick={onClickAction}>
          <img
            src={isAdded ? '/img/btn-added.svg' : '/img/plus.svg'}
            alt="Добавить в корзину"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;

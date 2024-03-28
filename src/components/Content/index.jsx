import React from 'react';
import styles from './Content.module.scss';
import Card from '../Card';

function Content({ onClickAddCart, items }) {
  return (
    <div className={styles.content}>
      <div className={styles.blockH1Search}>
        <h1>Все логотипы</h1>
        <div className={styles.searchBlock}>
          <img src="/img/loupe.svg" alt="Поиск" />
          <input placeholder="Поиск..." />
        </div>
      </div>
      <div className={styles.logos}>
        {items.map((obj) => (
          <Card title={obj.title} price={obj.price} urlImg={obj.urlImg} onClickAddCart={onClickAddCart} />
        ))}
      </div>
    </div>
  );
}

export default Content;

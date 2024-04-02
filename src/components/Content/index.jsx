import React from 'react';
import styles from './Content.module.scss';
import Card from '../Card';

function Content({ onClickAddCart, items, searchValue, onChangeSearchInput, setSearchValue }) {
  return (
    <div className={styles.content}>
      <div className={styles.blockH1Search}>
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все логотипы' }</h1>
        <div className={styles.searchBlock}>
          <img src="/img/loupe.svg" alt="Поиск" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          {searchValue && <div onClick={() => setSearchValue('')}>X</div>}
        </div>
      </div>
      <div className={styles.logos}>
        {items
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj, index) => (
            <Card
              key={`${index}${obj.title}`}
              title={obj.title}
              price={obj.price}
              urlImg={obj.urlImg}
              onClickAddCart={onClickAddCart}
            />
          ))}
      </div>
    </div>
  );
}

export default Content;

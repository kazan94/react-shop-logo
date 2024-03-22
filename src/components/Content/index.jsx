import styles from './Content.module.scss';
import Card from '../Card';

const arr = [
    { title: 'Логотип "Кошка"', price: 1999, urlImg: '/img/logo/cat-ico.png' },
    { title: 'Логотип "Лиса"', price: 1, urlImg: '/img/logo/fox-ico.png' },
    { title: 'Логотип "Мышь"', price: 4999, urlImg: '/img/logo/mouse-ico.png' },
    { title: 'Логотип "Заяц"', price: 399, urlImg: '/img/logo/rabbit-ico.png' },
    { title: 'Логотип "Змея"', price: 9999, urlImg: '/img/logo/snake-ico.png' },
    { title: 'Логотип "Волк"', price: 29999, urlImg: '/img/logo/wolf-ico.png' },
  ];

function Content() {
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
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} urlImg={obj.urlImg} />
          ))}
        </div>
      </div>
    );
};

export default Content;
import styles from './Header.module.scss'

function Header (props) {
    return (
        <header>
        <div className={styles.headerLeft}>
          <img
            width={90}
            height={90}
            src="/img/logo.png"
            alt="Логотип LOGO-SHOP"
          />
          <div>
            <h3>LOGO-SHOP</h3>
            <p>Магазин лучших логотипов</p>
          </div>
        </div>
        <ul className={styles.headerRight}>
          <li onClick={props.onClickCartBtn}>
            <img width={24} height={24} src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={24} height={24} src="/img/profile.svg" alt="Профиль" />
          </li>
        </ul>
      </header>
    )
};

export default Header;
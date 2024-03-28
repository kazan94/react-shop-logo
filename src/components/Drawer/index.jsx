import styles from './Drawer.module.scss';

function Drawer({ onClickCartBtn, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div
        onClick={onClickCartBtn}
        className={styles.overlayForCloseDrawer}
      ></div>
      <div className={styles.drawer}>
        <div>
          <h2>
            Корзина
            <img
              onClick={onClickCartBtn}
              width={32}
              height={32}
              src="/img/btn-delete.svg"
              alt="Закрыть корзину"
            />
          </h2>
          <div className={styles.cartItems}>
            {items.map((obj) => (
              <div className={styles.cartItem}>
                <img src={obj.urlImg} alt="Логотип" />
                <div className={styles.cartItemNamePrice}>
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <div className={styles.cartItemDelete}>
                  <img
                    width={32}
                    height={32}
                    src="/img/btn-delete.svg"
                    alt="Удалить из корзины"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.drawerPayContainer}>
          <div className={styles.drawerTotal}>
            <p>Итого:</p>
            <div></div>
            <b>21 498 руб.</b>
          </div>
          <div className={styles.drawerTotal}>
            <p>CashBack:</p>
            <div></div>
            <b>1 074 руб.</b>
          </div>
          <button className={`${styles.greenButton} greenButton`}>
            Оформить заказ
            <img src="/img/arrow.svg" alt="Оформить" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

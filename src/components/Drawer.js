function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <div>
          <h2>
            Корзина{' '}
            <img
              width={32}
              height={32}
              src="/img/btn-delete.svg"
              alt="Закрыть корзину"
            />
          </h2>
          <div className="cartItems">
            <div className="cartItem">
              <img src="/img/logo/cat-ico.png" alt="Логотип" />
              <div className="cartItemName-price">
                <p>Логотип "Кошка"</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cartItemDelete">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-delete.svg"
                  alt="Удалить из корзины"
                />
              </div>
            </div>
            <div className="cartItem">
              <img src="/img/logo/fox-ico.png" alt="Логотип" />
              <div className="cartItemName-price">
                <p>Логотип "Лиса"</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cartItemDelete">
                <img
                  width={32}
                  height={32}
                  src="/img/btn-delete.svg"
                  alt="Удалить из корзины"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="drawerPayContainer">
          <div className="drawerTotal">
            <p>Итого:</p>
            <div></div>
            <b>21 498 руб.</b>
          </div>
          <div className="drawerTotal">
            <p>CashBack:</p>
            <div></div>
            <b>1 074 руб.</b>
          </div>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Оформить" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div>
            <h2>Корзина</h2>
            <div className="cartItem">
              <img src="/img/logo/cat-ico.png" alt="Логотип" />
              <div className="cartItemName-price">
                <p>Логотип "Кошка"</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cartItemDelete"><img width={32} height={32} src="/img/btn-delete.svg" alt="Удалить из корзины" /></div>
            </div>
            <div className="cartItem">
              <img src="/img/logo/fox-ico.png" alt="Логотип" />
              <div className="cartItemName-price">
                <p>Логотип "Лиса"</p>
                <b>12 999 руб.</b>
              </div>
              <div className="cartItemDelete"><img width={32} height={32} src="/img/btn-delete.svg" alt="Удалить из корзины" /></div>
            </div>
          </div>
          <div className="drawerPayContainer">
            <div className="drawerTotal">
              <p>Итого:</p>
              <div className="dottedLine"></div>
              <b>21 498 руб.</b>
            </div>
            <div className="drawerTotal">
              <p>CashBack:</p>
              <div className="dottedLine"></div>
              <b>1 074 руб.</b>
            </div>
            <div className="btnCheckout">
              <p>Оформить заказ</p>
              <img src="/img/arrow.svg" alt="Оформить" />
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
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
        <ul className="headerRight">
          <li>
            <img width={24} height={24} src="/img/cart.svg" alt="Корзина" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={24} height={24} src="/img/profile.svg" alt="Профиль" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="blockH1-Search">
          <h1>Все логотипы</h1>
          <div className="searchBlock">
            <img src="/img/loupe.svg" alt="Поиск" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="logos">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Добавить в избранное" />
            </div>
            <div className="cardImgContainer">
              <img src="/img/logo/cat-ico.png" alt="Логотип" />
            </div>
            <p className="cardName">Логотип "Кошка"</p>
            <div className="cardPriceAndAdd">
              <div>
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="Добавить в корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="cardImgContainer">
              <img src="/img/logo/fox-ico.png" alt="Логотип" />
            </div>
            <p className="cardName">Логотип "Лиса"</p>
            <div className="cardPriceAndAdd">
              <div>
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="Добавить в корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="cardImgContainer">
              <img src="/img/logo/mouse-ico.png" alt="Логотип" />
            </div>
            <p className="cardName">Логотип "Мышь"</p>
            <div className="cardPriceAndAdd">
              <div>
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="Добавить в корзину" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="cardImgContainer">
              <img src="/img/logo/rabbit-ico.png" alt="Логотип" />
            </div>
            <p className="cardName">Логотип "Заяц"</p>
            <div className="cardPriceAndAdd">
              <div>
                <p>ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img src="/img/plus.svg" alt="Добавить в корзину" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

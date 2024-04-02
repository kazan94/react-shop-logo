import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickCartBtn = () => {
    setDrawerOpened(!drawerOpened);
  };

  React.useEffect(() => {
    // вариант с fetch
    // fetch('https://660517ea2ca9478ea17f470f.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });
    axios
      .get('https://660517ea2ca9478ea17f470f.mockapi.io/items')
      .then((res) => setItems(res.data));
  }, []);

  const onClickAddCart = (obj) => {
    setCartItems((prev) => {
      if (prev.some((prevObj) => prevObj.title === obj.title)) {
        return prev.reduce((accumulator, element) => {
          if (element.title === obj.title) {
            return [...accumulator];
          } else {
            return [...accumulator, element];
          }
        }, []);
      } else {
        return [...prev, obj];
      }
    });
  };

  return (
    <div className="wrapper">
      {/* Корзина */}
      {/* способ для отображения корзины с тернарным оператором */}
      {/* {drawerOpened ? <Drawer onClickCartBtn={onClickCartBtn} /> : null} */}
      {/* способ для отображения корзины с двойным &&. если drawerOpened = true, то <Drawer onClickCartBtn={onClickCartBtn} />, если false, то ничего не выполнять */}
      {drawerOpened && (
        <Drawer onClickCartBtn={onClickCartBtn} items={cartItems} />
      )}
      {/* Шапка с лого, ико: картинка и профиль, сумма корзины */}
      <Header onClickCartBtn={onClickCartBtn} />
      {/* Все логотиипы, поиск. Контейнер с картами */}
      <Content
        onClickAddCart={onClickAddCart}
        items={items}
        searchValue={searchValue}
        onChangeSearchInput={onChangeSearchInput}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default App;

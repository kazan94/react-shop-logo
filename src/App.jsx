import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://660517ea2ca9478ea17f470f.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const [cartItems, setCartItems] = React.useState([]);

  const onClickAddCart = (obj) => {
    setCartItems((prev) => {
      if (prev.some(prevObj => prevObj.title === obj.title)) {
        return prev.reduce((accumulator,element) => {
          if (element.title === obj.title) {
            return [...accumulator]
          } else {
            return [...accumulator, element]
          }
        },[])
      } else {
      return [...prev, obj]}});
  };

  const onClickCartBtn = () => {
    setDrawerOpened(!drawerOpened);
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
      <Content onClickAddCart={onClickAddCart} items={items} />
    </div>
  );
}

export default App;

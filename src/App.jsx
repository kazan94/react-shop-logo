import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  const [drawerOpened, setDrawerOpened] = React.useState(false);

  const onClickCartBtn = () => {
    setDrawerOpened(!drawerOpened);
  };

  return (
    <div className="wrapper">
      {/* Корзина */}
      {drawerOpened ? <Drawer onClickCartBtn={onClickCartBtn} /> : null}
      {/* Шапка с лого, ико: картинка и профиль, сумма корзины */}
      <Header onClickCartBtn={onClickCartBtn} />
      {/* Все логотиипы, поиск. Контейнер с картами */}
      <Content />
    </div>
  );
}

export default App;

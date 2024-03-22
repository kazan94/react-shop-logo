import Drawer from './components/Drawer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="wrapper">
      {/* Корзина */}
      <Drawer />
      {/* Шапка с лого, ико: картинка и профиль, сумма корзины */}
      <Header />
      {/* Все логотиипы, поиск. Контейнер с картами */}
      <Content />
    </div>
  );
}

export default App;

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
        <Drawer />
        <Header />
      <div className="content">
        <div className="blockH1-Search">
          <h1>Все логотипы</h1>
          <div className="searchBlock">
            <img src="/img/loupe.svg" alt="Поиск" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="logos">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

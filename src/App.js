import './App.css';
import PickArea from './page/PickArea';
import ResultArea from './page/ResultArea';
import './page/style.css'

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="font-bold text-7xl title text-center py-16">GAME ĐỔ XÚC XẮC</h1>
        <PickArea />
        <ResultArea />
      </div>
    </div>
  );
}

export default App;

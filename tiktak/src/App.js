import './App.css';
import Square from './componunts/Square';

function App() {
  return (
    <div className="App-header">
      <h1>React Tic Tac Toe</h1>
      <div className="Row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="Row">
        <Square/>
        <Square/>
        <Square/>
        </div>
      <div className="Row">
      <Square/>
      <Square/>
      <Square/>
      </div>
    </div>
  );
}

export default App;

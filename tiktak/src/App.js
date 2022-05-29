import Square from './componunts/Square';
import React, {useState, useEffect } from 'react'


const initialState=["","","","","","","","","",""]

function App() {

  const [state,setState]=useState(initialState);
  const [xchance,setXchance]=useState(false);

const onSquareClicked = (index) =>{
let strings = Array.from(state);
strings[index]=xchance ? "X":"0"
setState(strings);
setXchance(!xchance);
}

useEffect(()=>{
const winner = checkWinner();

if(winner){
  setTimeout(()=>{
    alert(`Ta da ! ${winner} has won the Game!`);
    setState(initialState)
  },1000)
 }
}, [state])

const checkWinner = () =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      return state[a];
    }
  }
  return null;
}

  return (
    <div className="App-header">
      <h1>React Tic Tac Toe</h1>
      <div className="Row jc-center">
        <Square className="b-bottom-right" state={state[0]} onClick={() => onSquareClicked(0)}/>
        <Square className="b-bottom-right" state={state[1]} onClick={() => onSquareClicked(1)}/>
        <Square className="b-bottom" state={state[2]} onClick={() => onSquareClicked(2)}/>
      </div>
      <div className="Row jc-center">
        <Square className="b-bottom-right" state={state[3]} onClick={() => onSquareClicked(3)}/>
        <Square className="b-bottom-right" state={state[4]} onClick={() => onSquareClicked(4)}/>
        <Square className="b-bottom" state={state[5]} onClick={() => onSquareClicked(5)}/>
        </div>
      <div className="Row jc-center">
      <Square className="b-right" state={state[6]} onClick={() => onSquareClicked(6)}/>
      <Square className="b-right" state={state[7]} onClick={() => onSquareClicked(7)}/>
      <Square className="" state={state[8]} onClick={() => onSquareClicked(8)}/>
      </div>
    
      <button className="clear-button" onClick= {()=> setState(initialState)}>Clear Game</button>
      <p>Shreenath Panchal</p>
    </div>
  );
}

export default App;

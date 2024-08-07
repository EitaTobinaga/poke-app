import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('ポケモン');
  const [height, setHeight] = useState('ポケモンの大きさ');
  async function getPokename(){
    const a = await axios.get("https://pokeapi.co/api/v2/pokemon/1/")
    console.log(a.data.name)
    const pokename = a.data.name
    setName(pokename)
  }


  async function getPokeheight(){
    const b = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    console.log(b.data.height)
    const pokeheight = b.data.height
    setHeight(pokeheight)
  }

  return (
    <div className="App">
        <h1>
        ポケモンアプリ
        </h1>
          <div>
            {name}
          <div>
            <button onClick={getPokename}>ポケモン取得</button>
          </div>
        </div>
          <div>
            {height}
          <div>
            <button onClick={getPokeheight}>ポケモンの大きさ取得</button>
        </div>
        </div>
    </div>
  );
}

export default App;

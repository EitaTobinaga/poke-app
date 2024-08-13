import axios from 'axios';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('ポケモン');
  const [height, setHeight] = useState('ポケモンの大きさ');
  const randomId = Math.floor(Math.random() * 898) + 1
  async function getPokemon(){
    console.log(randomId)
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
    console.log(pokemon.data.name)
    const pokename = pokemon.data.name
    console.log(pokemon.data.height)
    const pokeheight = pokemon.data.height
    setHeight(pokeheight)
    setName(pokename)
  }


  return (
    <div className="App">
        <h1>
        ポケモンアプリ
        </h1>
          <div className="ポケモン情報用の土地">
            <div className='ポケモン名前用の土地'>
              <h3>ポケモンの名前</h3>
              <p>{name}</p>
            </div>
            <div className='ポケモン高さ用の土地'>
              <h3>ポケモンの高さ</h3>
              <p>{height}</p>
            </div>
          <div>
            <button onClick={getPokemon}>ポケモン情報の取得</button>
          </div>
        </div>
        {/* <div className='sample'>
          <div className='sample-box'></div>
        </div> */}
    </div>
  );
}

export default App;

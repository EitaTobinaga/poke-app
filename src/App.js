import axios from 'axios';
import './App.css';
import { useState } from 'react';


function App() {
  const [name, setName] = useState('ポケモン');
  const [height, setHeight] = useState('ポケモンの大きさ');
  const [frontImageUrl, setFrontImageUrl] = useState('');
  const [backImageUrl, setBackImageUrl] = useState('');
  const [sFrontImageUrl, setsFrontImageUrl] = useState('');
  const [sBackImageUrl, setsBackImageUrl] = useState('');

  const randomId = Math.floor(Math.random() * 898) + 1
  async function getPokemon(){
    console.log(randomId)
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
    console.log(pokemon.data.name)
    const pokename = pokemon.data.name
    console.log(pokemon.data.height)
    const pokeheight = pokemon.data.height
    console.log(pokemon.data.sprites.front_default)
    const frontpokeimage = pokemon.data.sprites.front_default
    const backpokeimage = pokemon.data.sprites.back_default
    const sFrontpokeimage = pokemon.data.sprites.front_shiny
    const sBackpokeimage = pokemon.data.sprites.back_shiny
    setName(pokename)
    setHeight(pokeheight)
    setFrontImageUrl(frontpokeimage)
    setBackImageUrl(backpokeimage)
    setsFrontImageUrl(sFrontpokeimage)
    setsBackImageUrl(sBackpokeimage)
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
            <div className='通常色ポケモンの画像説明'>
              <h3>通常の姿</h3>
            </div>
            <div className='通常色ポケモンの画像'>
              <img src={frontImageUrl} alt=''/>
              <img src={backImageUrl} alt=''/>
            </div>
            <div className='色違いポケモンの画像説明'>
              <h3>色違いの姿</h3>
            </div>
            <div className='色違いポケモンの画像'>
              <img src={sFrontImageUrl} alt='色違い正面画像'/>
              <img src={sBackImageUrl} alt='色違い背面画像'/>
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

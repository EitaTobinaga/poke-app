import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState('食べ物');
  async function getRecipe(){
    const a = await axios.get('https://dummyjson.com/recipes/1')
  console.log(a.data.name)
  const foodname = a.data.name
  setFood(foodname)
  }

  return (
    <div className="App">
       <h1>
        ポケモンアプリ
       </h1>
       <div>
        {food}
       </div>
       <button onClick={getRecipe}>レシピ取得</button>
    </div>
  );
}

export default App;

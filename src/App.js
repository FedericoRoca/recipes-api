import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import {useFetch} from './useFetch';
function App() {
  const [recipeName, setRecipeName] = useState(localStorage.getItem('recipes'));
  const recipe = useFetch(
    `https://cors-anywhere.herokuapp.com/http://recipesapi.herokuapp.com/api/v2/recipes?q=${recipeName}&page=1`,
  );
  useEffect(() => {
    localStorage.setItem('recipes', recipeName);
  }, [recipeName]);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form setRecipeName={setRecipeName} />
      <Recipes recipes={recipe} />
    </div>
  );
}

export default App;

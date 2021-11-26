import React from 'react';
import {useState} from 'react';
const Form = (props) => {
  const [actualRecipe, setActualRecipe] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setRecipeName(actualRecipe);
        setActualRecipe('');
      }}
      style={{marginBottom: '2rem'}}
    >
      <input
        className="form__input"
        type="text"
        name="recipeName"
        value={actualRecipe}
        onChange={(e) => {
          setActualRecipe(e.target.value);
        }}
      />
      <button className="form__button">Search</button>
    </form>
  );
};

export default Form;

import React from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from '../useFetch';
const Recipe = (props) => {
  const id = props.location.state.recipe.id;
  let res = useFetch(
    `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${id}`,
  );
  let recipe = res.data ? res.data.recipe : '';
  return (
    <div className="container">
      {recipe.length !== 0 && (
        <div className="active-recipe">
          <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{recipe.publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:
            <span>
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Recipe;

import React from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from '../useFetch';
const Recipe = (props) => {
  const id = props.location.state.recipe.id;
  const {data, loading} = useFetch(
    `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/get?rId=${id}`,
  );
  const {image_url, publisher, publisher_url, title} = !loading && data.recipe;
  return (
    <div className="container">
      {!loading && (
        <div className="active-recipe">
          <img className="active-recipe__img" src={image_url} alt={title} />
          <h3 className="active-recipe__title">{title}</h3>
          <h4 className="active-recipe__publisher">
            Publisher: <span>{publisher}</span>
          </h4>
          <p className="active-recipe__website">
            Website:
            <span>
              <a href={publisher_url}>{publisher_url}</a>
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

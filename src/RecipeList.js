import React from 'react';
import {drinks} from './drink_types';

const RecipeList = (props) => {

  function renderRecipe(){
    for(let drink of drinks){
      if(drink.title.toLowerCase()===props.drink.toLowerCase()){
        return drink.recipe.map(item => {
          return <li key={item}>{item}</li>
        })
      }
    }
  }

  return(
    <ul>
      {renderRecipe()}
    </ul>
  )
}

export default RecipeList;

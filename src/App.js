import React, {useState} from 'react';
import RecipeList from './RecipeList';
import {drinks} from './drink_types';

const App = () => {
  const [stateDrink, setStateDrink] = useState('lemon tea');
  const btnStyle={margin: '1rem'}

  function buttonClass(btnName){
    if(btnName.toLowerCase()===stateDrink.toLowerCase()){
      return `btn btn-outline-secondary active`
    } else {
      return `btn btn-outline-secondary`
    }
  }

  function renderButtons(){
    return drinks.map(drink => {
      return (
        <button
        key={drink.title}
        className={buttonClass(drink.title)}
        onClick={()=>setStateDrink(drink.title)}
        style={btnStyle}>
          {drink.title}
        </button>
      )
    })
  }

  return(
    <div className='container'>
    {renderButtons()}
      <RecipeList drink={stateDrink}/>
    </div>
  )
}

export default App;

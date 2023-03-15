import './App.css';
import food from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(food);

  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      {foods.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;

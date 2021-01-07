import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className="bg-gray-100 pt-4 w-11/12 rounded shadow-2xl">
      <div className="px-4 pb-4 flex flex-col justify-center text-left items-center">
        <h1 className="text-red-500">{title}</h1>
        <img src={image} alt="" className="rounded w-8/12 h-full py-4"/>
        <ol className="w-7/12">
          {ingredients.map(ingredient => (
            <li className="list-decimal">{ingredient.text}</li>
          ))}
        </ol>
        <div className="flex flex-row w-8/12 pt-4">
          <p className="font-medium">Calories: </p>
          <p className="font-bold">{calories}</p>
        </div>
      </div>
    </div>
  );
}
 
export default Recipe;
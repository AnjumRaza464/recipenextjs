import RecipeListComponent from "@/components/recipe-list";
import React from "react";

async function FetchListOfRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const result = await response.json();
    return result.recipes;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeList = async () => {
  const listOfRecipes = await FetchListOfRecipes();
  
  return (
    <div>
      <RecipeListComponent listOfRecipes={listOfRecipes} />
    </div>
  );
};

export default RecipeList;

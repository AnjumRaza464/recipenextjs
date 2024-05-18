import RecipeDetailComponent from '@/components/recipe-detail'
import React from 'react'


async function FetchRecipeDetail(id) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeDeatilPage = async({params}) => {
  const getRecipeDetail = await FetchRecipeDetail(params.detail);
  return (
    <div>
      <RecipeDetailComponent getRecipeDetail={getRecipeDetail} />
    </div>
  )
}

export default RecipeDeatilPage
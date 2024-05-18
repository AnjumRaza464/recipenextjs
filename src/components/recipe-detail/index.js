import Link from 'next/link'
import React from 'react'

const RecipeDetailComponent = ({getRecipeDetail}) => {
 
  return (
    <div className='flex flex-col items-center justify-center  '>
      <h1 className='text-red-500 text-4xl'>{getRecipeDetail.name}</h1>
      {
        getRecipeDetail.ingredients.map((ingredient, index) => {
          return (
          <p className='text-red-500 text-xl' key={index}>{ingredient}</p>
        )
        })
      }
      <Link href={'/'}>Go back to home</Link>
      
    </div>
  )
}

export default RecipeDetailComponent
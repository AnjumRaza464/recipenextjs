import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const RecipeListComponent = ({ listOfRecipes }) => {
  console.log(listOfRecipes);
  return (
    <div>
      {listOfRecipes.map((recipe, index) => {
        return (
          <div key={index} >
            <Link href={`recipe-list/${recipe.id}`}>
            
            <Card className="max-w-sm w-full rounded shadow-lg overflow-hidden ">
              <CardHeader>
                
                <CardTitle>{recipe.name}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent >
               <img src={recipe.image} alt={recipe.name} width="300" height="300"/>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeListComponent;

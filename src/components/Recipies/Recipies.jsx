import React, { useContext } from 'react'
import { Context } from '../../context/context';
import Loader from '../Loader/Loader';
import AllRecipies from './AllRecipies';

const Recipies = () => {
  const {recipies, isRecipiesLoading} = useContext(Context);
  
  return isRecipiesLoading ? 
  <Loader />
  :
  (
    <section className='featured_recipies'>
      <article className='recipies_content content'>
          <h2 className='title'>Featured Recipies</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae tempora dolorum qui atque? Ea doloribus provident, quo est suscipit quidem sed alias possimus? Cum nemo voluptatum at dolorem assumenda!</p>
          <div className="recipe_wrap">
            {
              recipies.map((recipe) => {
                return <AllRecipies key={recipe.id} title={recipe.recipeTitle} image={recipe.recipeImage} description={recipe.recipeDescription} date={recipe.date} time={recipe.date}/>
              })
            }
          </div>
      </article>
    </section>
  )
}

export default Recipies
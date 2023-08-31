import React, { useContext } from 'react'
import AllCategories from './AllCategories'
import { Context } from '../../context/context'
import Loader from '../Loader/Loader';

const Categories = () => {
  const {categories, isCategoriesLoading} = useContext(Context);
  
  return isCategoriesLoading ? 
  <Loader />
  :
  (
    <section className='featured_categories'>
      <article className='categories_content content'>
          <h2 className='title'>Featured Categories</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae tempora dolorum qui atque? Ea doloribus provident, quo est suscipit quidem sed alias possimus? Cum nemo voluptatum at dolorem assumenda!</p>
          <div className="category_wrap">
            {
              categories.map((category) => {
                return <AllCategories key={category.id} title={category.categoryTitle} image={category.categoryImage}/>
              })
            }
          </div>
      </article>
    </section>
  )
}

export default Categories
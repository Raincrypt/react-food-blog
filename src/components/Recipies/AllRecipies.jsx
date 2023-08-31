import React from 'react'

const AllRecipies = ({title, image, description, date, time}) => {
  return (
    <div className='recipe_container'>
        <img src={image} alt="Recipe Image" className='recipe_image'/>
        <h4>{title}</h4>
        <div className="recipe_time">
            <span>⌚{time}</span>
            <span>📅{date}</span>
        </div>
        <span>{description}</span>
    </div>
  )
}

export default AllRecipies
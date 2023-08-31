import React from 'react'

const AllCategories = ({image, title}) => {
    return (
        <div className='category_container'>
            <img src={image} alt="Category Image" className='category_image'/>
            <h4>{title}</h4>
        </div>
    )
}

export default AllCategories
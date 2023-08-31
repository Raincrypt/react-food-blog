import React from 'react'

const CarouselSlide = ({ id, bg, title, description }) => {
  return (
    <div className="slide_wrap" style={{ backgroundImage: `url(${bg})` }}>
        <div className="text_wrap">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default CarouselSlide;
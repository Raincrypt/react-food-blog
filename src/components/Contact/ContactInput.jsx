import React from 'react'

const ContactInput = ({ type = "text", name, value, inputHandler, placeholder = ''}) => {
  return (
    <>
        <input
            className='content_input'
            type={type} 
            name={name} 
            value={value}
            onChange={inputHandler}
            placeholder={placeholder}
            required
        />
    </>
  )
}

export default ContactInput
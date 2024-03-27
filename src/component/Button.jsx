import React from 'react'

const Button = ({text,isActive, ...rest}) => {
  const activeClass = isActive ? 'bg-green-500 text-white' : '';
  return (
    <button   className={`border border-green-400 px-6 py-2 rounded-full font-semibold text-green-500 hover:bg-green-500 hover:text-white ${activeClass}`} {...rest}>{text}</button>
  )
}

export default Button
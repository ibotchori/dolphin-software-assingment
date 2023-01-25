import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ text, className, type, path }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(path ? path : '')}
      type={type}
      className={`${className}  inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 className-4 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto`}
    >
      {text}
    </button>
  )
}

export default Button

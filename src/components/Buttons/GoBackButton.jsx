import React from 'react'
import { GoBackIcon } from 'assets'
import { useNavigate } from 'react-router-dom'

const GoBackButton = ({ path }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(path)} className='pl-8 pt-5 hidden sm:inline'>
      <img
        src={GoBackIcon}
        alt='Go Back Button'
        className='w-10 cursor-pointer hover:bg-gray-500 rounded-full'
      />
    </div>
  )
}

export default GoBackButton

import React from 'react'
import { BackArrowIcon } from 'assets'
import { useNavigate } from 'react-router-dom'

const BackArrow = ({ path }) => {
  const navigate = useNavigate()
  return (
    <img
      onClick={() => navigate(path)}
      src={BackArrowIcon}
      alt='Back Arrow'
      className='absolute left-0 pt-[6px] pl-5 cursor-pointer'
    />
  )
}

export default BackArrow

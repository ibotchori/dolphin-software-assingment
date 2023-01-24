import React from 'react'

const Button = ({ text, px }) => {
  return (
    <button
      type='submit'
      className={`${px} py-3  bg-mainButtonColor hover:bg-hoverButtonColor  focus:bg-focusButtonColor  rounded-lg  text-center  text-lg  tracking-wide text-white  font-semibold`}
    >
      {text}
    </button>
  )
}

export default Button

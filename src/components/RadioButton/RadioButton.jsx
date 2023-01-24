import { ErrorIcon } from 'assets'
import React from 'react'

const RadioButton = ({
  title,
  name,
  label1,
  label2,
  value1,
  value2,
  checked1,
  checked2,
  errorMessage,
  register,
}) => {
  return (
    <div className='flex justify-center flex-col gap-5 pb-8'>
      <p
        className={`font-bold max-w-lg flex ${
          errorMessage ? 'text-red-500' : ''
        }`}
      >
        {title}
        {errorMessage && (
          <img className='w-4 h-4 ml-2 mt-1' src={ErrorIcon} alt='error' />
        )}
      </p>
      <div className='flex gap-10'>
        <div className='form-check'>
          <input
            name={name}
            value={value1}
            /* {...register(name)} */
            defaultChecked={checked1}
            className='rounded-full appearance-none  h-5 w-5 border-2  border-radioButtonColor bg-white checked:bg-radioButtonColor  checked:border-radioButtonColor focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer mt-[2px]'
            type='radio'
          />
          <label
            className='form-check-label inline-block text-gray-800 font-semibold'
            htmlFor='flexRadioDefault1'
          >
            {label1}
          </label>
        </div>
        <div className='form-check'>
          <input
            name={name}
            value={value2}
            /*   {...register(name)} */
            defaultChecked={checked2}
            className='rounded-full appearance-none  h-5 w-5 border-2  border-radioButtonColor bg-white checked:bg-radioButtonColor  checked:border-radioButtonColor focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-5 cursor-pointer mt-[2px]'
            type='radio'
          />
          <label
            className='form-check-label inline-block text-gray-800 font-semibold'
            htmlFor='flexRadioDefault2'
          >
            {label2}
          </label>
        </div>
      </div>
    </div>
  )
}

export default RadioButton

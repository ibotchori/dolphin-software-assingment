import React from 'react'

const Select = ({
  label,
  id,
  options,
  register,
  name,
  disabled,
  error,
  value,
}) => {
  return (
    <div className='mb-6'>
      <select
        value={value}
        disabled={disabled}
        /*   {...register(name)} */
        id={id}
        name={name}
        className={`${
          error ? 'border-red-500 ' : ''
        }bg-gray-200 text-gray-900 border rounded-lg    focus:outline-none  font-bold  block w-full p-[11px] `}
      >
        <option value=''>{label}</option>
        {options?.map((item) => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select

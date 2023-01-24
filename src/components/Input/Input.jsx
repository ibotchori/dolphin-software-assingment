import React from 'react'

const Input = ({
  label,
  type,
  id,
  placeholder,
  errorMessage,
  name,
  register,
  dirtyFields,
  hint,
  placeholderIcon,
  value,
}) => {
  return (
    <div className='mb-6'>
      <label
        htmlFor={label}
        className={`block mb-2  font-bold text-gray-900 ${
          errorMessage ? 'text-red-500' : ' '
        }`}
      >
        {label}
      </label>
      <div className='relative'>
        {dirtyFields && !errorMessage ? (
          /* checked icon */
          <svg
            className='absolute right-1 mt-3 mr-2'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z'
              fill='#23FF39'
            />
          </svg>
        ) : (
          placeholderIcon && (
            /* currency icon */
            <svg
              className='absolute right-1 mt-3 mr-2'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.05 3.03094V3.24823L8.26655 3.23025C8.50945 3.21009 8.75236 3.2 9 3.2C9.24764 3.2 9.49055 3.21009 9.73345 3.23025L9.95 3.24823V3.03094V1.5C9.95 0.782054 10.5309 0.2 11.25 0.2C11.9691 0.2 12.55 0.782054 12.55 1.5V3.81563V3.94389L12.6666 3.99739C15.183 5.15247 17.0576 7.4582 17.6259 10.24L17.6262 10.2415C17.7673 10.9065 17.3119 11.6295 16.6099 11.7759C15.8943 11.9195 15.1829 11.4558 15.0757 10.7692L15.0759 10.7691L15.0742 10.7606C14.7834 9.31153 13.9839 8.04721 12.8749 7.16095L12.55 6.90135V7.31719V10.5C12.55 11.2192 11.9692 11.8 11.25 11.8C10.5308 11.8 9.95 11.2192 9.95 10.5V6.00469V5.79685L9.74231 5.80484C9.5948 5.81051 9.45119 5.80743 9.29992 5.80418C9.20401 5.80212 9.10502 5.8 9 5.8C8.89498 5.8 8.79599 5.80212 8.70008 5.80418C8.54881 5.80743 8.4052 5.81051 8.25769 5.80484L8.05 5.79685V6.00469V10.5C8.05 11.2192 7.46923 11.8 6.75 11.8C6.03077 11.8 5.45 11.2192 5.45 10.5V7.31719V6.90115L5.12509 7.16099C3.70795 8.29431 2.8 10.0431 2.8 12C2.8 15.4245 5.57548 18.2 9 18.2H16.5C17.2192 18.2 17.8 18.7808 17.8 19.5C17.8 20.2192 17.2192 20.8 16.5 20.8H1.5C0.782054 20.8 0.2 20.2191 0.2 19.5C0.2 18.7809 0.782054 18.2 1.5 18.2H2.29172H2.73883L2.44081 17.8667C1.04725 16.3081 0.2 14.2551 0.2 12C0.2 8.44814 2.30345 5.38633 5.33334 3.99743L5.45 3.94396V3.81563V1.5C5.45 0.782054 6.03089 0.2 6.75 0.2C7.46911 0.2 8.05 0.782054 8.05 1.5V3.03094Z'
                fill='#797979'
                stroke='white'
                strokeWidth='0.4'
              />
            </svg>
          )
        )}

        <input
          value={value}
          type={type}
          id={id}
          className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:border-blue-300  focus:ring-blue-300 focus:outline-none  focus:ring-1 block w-full p-3 border  ${
            errorMessage
              ? 'border-red-500 focus:border-red-500  focus:ring-red-500'
              : dirtyFields && !errorMessage
              ? 'border-blue-500 '
              : 'border-gray-300 '
          } `}
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      {/* Error */}

      {errorMessage ? (
        <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
          <p className='pt-[6px] pl-1 text-gay-600 text-red-500'>
            {errorMessage}
          </p>
        </div>
      ) : (
        <div className='h-[0.1px] flex text-[10px] sm:text-xs '>
          <p className='pt-[6px] pl-1 text-gay-600'>{hint}</p>
        </div>
      )}
    </div>
  )
}

export default Input

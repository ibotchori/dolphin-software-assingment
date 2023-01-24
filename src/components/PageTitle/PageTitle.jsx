import BackArrow from 'components/Buttons/BackArrow'
import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTitle = ({ path }) => {
  const location = useLocation()
  return (
    <>
      {/* Desktop */}
      <div className='sm:block hidden'>
        <div className='flex w-full justify-center gap-16 pb-10 font-semibold'>
          <div>
            <p>მომხმარებლის დამატება</p>
            {location.pathname === '/' && (
              <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2 hidden sm:block'></div>
            )}
          </div>
          <div>
            <p>ნივთების დამატება</p>
            {location.pathname === '/user-item' && (
              <div className='w-[80%] bg-gray-600 h-[3px] m-auto mt-2 hidden sm:block'></div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='m-auto py-3 sm:hidden block mt-3 '>
        {location.pathname !== '/' && <BackArrow path={path} />}
        <p className='font-semibold text-[1rem] '>
          {location.pathname === '/'
            ? 'მომხმარებლის დამატება'
            : 'ნივთების დამატება'}
        </p>
        <p className='text-center text-gray-500 text-sm'>
          {location.pathname === '/' ? '1/2' : '2/2'}
        </p>
      </div>
    </>
  )
}

export default PageTitle

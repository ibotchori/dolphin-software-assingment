/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Button, Table } from 'components'
import React from 'react'

/* Redux */
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const UserItem = () => {
  const { name } = useSelector((state) => state.user)
  const items = useSelector((state) => state.items)

  return (
    <div className='bg-gray-100 w-full h-screen  sm:p-20 flex flex-col justify-between'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:pt-0 pt-2 '>
          <div className='sm:flex-auto '>
            <h1 className='text-xl font-semibold text-gray-900'>
              გამარჯობა {name}
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              აქ შეგიძლიათ დაამატოთ მომხმარებელის ნივთები
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <Button
              text='ნივთის დამატება'
              type={'button'}
              className='px-7'
              path='/item-list/add-item'
            />
          </div>
        </div>
        <Table data={items} />
      </div>
    </div>
  )
}

export default UserItem

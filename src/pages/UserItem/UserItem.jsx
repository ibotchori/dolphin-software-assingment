/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Input, PageTitle, SubmitButton, Table } from 'components'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ItemsSchema } from 'Schema'
/* Redux */
import { useSelector, useDispatch } from 'react-redux'
// actions
import {
  setAge,
  setCounty,
  setEmail,
  setName,
  setPhoneNumber,
  setSex,
  setSurname,
} from 'features/user/userSlice'
import { addItem } from 'features/items/ItemsSlice'

const UserItem = () => {
  const { name } = useSelector((state) => state.user)
  const items = useSelector((state) => state.items)

  const dispatch = useDispatch()

  /* Use Form */
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(ItemsSchema),
  })

  const onSubmit = (data) => {
    const { title, price, quantity } = data
    dispatch(
      addItem({
        id: uuidv4(),
        title,
        price,
        quantity,
      })
    )
    reset()
  }
  return (
    <div className='bg-gray-100 w-full h-screen  sm:p-20 flex flex-col justify-between'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>
              გამარჯობა {name}
            </h1>
            <p className='mt-2 text-sm text-gray-700'>
              აქ შეგიძლიათ დაამატოთ მომხმარებელის ნივთები
            </p>
          </div>
          <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              ნივთის დამატება
            </button>
          </div>
        </div>
        <Table data={items} />
      </div>
    </div>
  )
}

export default UserItem

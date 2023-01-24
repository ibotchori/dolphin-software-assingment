/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Input, PageTitle, SubmitButton, Table } from 'components'
import React from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmployeeSchema, ItemsSchema, UserSchema } from 'Schema'
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

const UserItem = () => {
  const { name } = useSelector((state) => state.user)

  /* Use Form */
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(ItemsSchema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className='bg-gray-100 w-full h-screen sm:py-10 flex flex-col justify-between'>
      <PageTitle path='/' />
      <div className='flex justify-center h-full '>
        <div className='sm:w-[60%] w-full bg-white rounded-xl p-4 sm:p-10 '>
          <p className=' text-xl font-bold pb-10'>გამარჯობა {name}</p>
          <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 '>
              <div className='w-[21.875rem] sm:w-[25rem] '>
                <Input
                  label='დასახელება'
                  name='title'
                  register={register}
                  errorMessage={errors.title?.message}
                  dirtyFields={dirtyFields.title}
                />
              </div>
              <div className='w-[21.875rem] sm:w-[25rem]'>
                <Input
                  label='ფასი'
                  type={'number'}
                  name='price'
                  register={register}
                  errorMessage={errors.price?.message}
                  dirtyFields={dirtyFields.price}
                />
              </div>
              <div className='w-[21.875rem] sm:w-[25rem]'>
                <Input
                  label='რაოდენობა'
                  type={'number'}
                  name='quantity'
                  register={register}
                  errorMessage={errors.quantity?.message}
                  dirtyFields={dirtyFields.quantity}
                />
              </div>
            </div>
            <div className='w-full flex pr-3 lg:pr-0  justify-end'>
              <SubmitButton text='დამატება' px='px-10' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserItem

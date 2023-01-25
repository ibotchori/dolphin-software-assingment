/* eslint-disable no-unused-vars */
import { Input, Button } from 'components'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ItemsSchema } from 'Schema'
import { editItem } from 'features/items/ItemsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const EditItem = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

  const items = useSelector((state) => state.items)
  const existingItem = items.filter((item) => item.id === params.id)
  const { title, price, quantity } = existingItem[0]

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

  useEffect(() => {
    setValue('title', title)
    setValue('price', price)
    setValue('quantity', quantity)
  }, [price, quantity, setValue, title])

  const onSubmit = (data) => {
    const { title, price, quantity } = data
    dispatch(
      editItem({
        id: params.id,
        title,
        price,
        quantity,
      })
    )

    reset()
    navigate('/item-list')
  }
  return (
    <div className='bg-gray-100 w-full h-screen p-5 sm:p-20  flex flex-col justify-start items-center'>
      <div className=' flex justify-center'>
        <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div className='lg:flex-row sm:justify-between gap-3 items-center pb-5 '>
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
          <div className='w-full flex gap-2   justify-end'>
            <Button text='შენახვა' type={'submit'} />
            <Button text='უკან' className='px-7' path='/item-list' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditItem

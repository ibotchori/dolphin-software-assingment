import { Input, Button } from 'components'
import React from 'react'
import { useEditItem } from 'hooks'

const EditItem = () => {
  const { onSubmit, register, handleSubmit, errors, dirtyFields } =
    useEditItem()

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

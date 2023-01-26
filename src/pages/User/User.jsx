import { Input, RadioButton, Select, Button } from 'components'
import React from 'react'
import { useUser } from 'hooks'

const User = () => {
  const {
    handleSubmit,
    onSubmit,
    name,
    surname,
    age,
    sex,
    country,
    email,
    phone_number,
    register,
    errors,
    dirtyFields,
    countryList,
  } = useUser()

  return (
    <div className='bg-gray-100 w-full min-h-screen sm:py-10 flex flex-col justify-between'>
      <div className='flex justify-center h-full'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType='multipart/form-data'
          className='min-h-full w-full sm:w-[60%] bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '
        >
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='name'
                value={name}
                label='სახელი'
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                register={register}
                errorMessage={errors.name?.message}
                dirtyFields={dirtyFields.name}
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='surname'
                value={surname}
                label='გვარი'
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
                register={register}
                errorMessage={errors.surname?.message}
                dirtyFields={dirtyFields.surname}
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                label='ასაკი'
                value={age}
                type={'number'}
                name='age'
                hint='მხოლოდ ციფრები.'
                register={register}
                errorMessage={errors.age?.message}
                dirtyFields={dirtyFields.age}
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <RadioButton
                title='სქესი'
                name='sex'
                label1='მდედრობით'
                label2='მამრობითი'
                value1='მდედრობით'
                value2='მამრობითი'
                register={register}
                errorMessage={errors.sex?.message}
                dirtyFields={dirtyFields.sex}
                checked1={sex === 'მდედრობით'}
                checked2={sex === 'მამრობითი'}
              />
            </div>
          </div>
          <div className='flex justify-between flex-col gap-4 w-[21.875rem] sm:w-[25rem] lg:w-full m-auto'>
            <Select
              label='ქვეყანა'
              name='country'
              options={countryList}
              value={country}
              register={register}
              error={errors.country?.message}
            />
          </div>
          <div className=' w-[21.875rem] sm:w-[25rem] lg:w-full m-auto pt-0 lg:pt-5 gap-3 sm:gap-8 flex flex-col '>
            <Input
              name='email'
              value={email}
              label='მეილი'
              hint='უნდა აკმაყოფილებდეს მეილის ფორმატს'
              register={register}
              errorMessage={errors.email?.message}
              dirtyFields={dirtyFields.email}
            />
            <Input
              name='phone_number'
              value={phone_number}
              label='ტელეფონის ნომერი'
              hint='უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
              register={register}
              errorMessage={errors.phone_number?.message}
              dirtyFields={dirtyFields.phone_number}
            />
          </div>
          <div className='w-full flex pr-3 lg:pr-0  py-6 sm:py-14 justify-end'>
            <Button text='დამატება' type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default User

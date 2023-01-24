import { Input, PageTitle, RadioButton, Select, SubmitButton } from 'components'
import React from 'react'

const User = () => {
  const countryList = [
    { id: 1, name: 'საქართველო' },
    { id: 2, name: 'აშშ' },
    { id: 3, name: 'იაპონია' },
    { id: 4, name: 'საფრანგეთი' },
    { id: 5, name: 'გერმანია' },
    { id: 6, name: 'ჩინეთი' },
  ]

  return (
    <div className='bg-gray-100 w-full min-h-screen sm:py-10 flex flex-col justify-between'>
      <PageTitle path='/' />
      <div className='flex justify-center h-full'>
        <form
          encType='multipart/form-data'
          className='min-h-full w-full sm:w-[60%] bg-white rounded-xl  lg:px-28 pt-8 sm:pt-16 '
        >
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='name'
                label='სახელი'
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                name='surname'
                label='გვარი'
                hint='მინიმუმ 2 სიმბოლო, ქართული ასოები'
              />
            </div>
          </div>
          <div className='flex flex-col lg:flex-row sm:justify-between gap-3 items-center pb-5 lg:pb-10'>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <Input
                label='ასაკი'
                type={'number'}
                name='age'
                hint='მხოლოდ ციფრები.'
              />
            </div>
            <div className='w-[21.875rem] sm:w-[25rem]'>
              <RadioButton
                title='სქესი'
                name='laptop_hard_drive_type'
                label1='მდედრობით'
                label2='მამრობითი'
                value1='მდედრობით'
                value2='მამრობითი'
              />
            </div>
          </div>
          <div className='flex justify-between flex-col gap-4 w-[21.875rem] sm:w-[25rem] lg:w-full m-auto'>
            <Select label='ქვეყანა' name='country' options={countryList} />
          </div>
          <div className=' w-[21.875rem] sm:w-[25rem] lg:w-full m-auto pt-0 lg:pt-5 gap-3 sm:gap-8 flex flex-col '>
            <Input
              name='email'
              label='მეილი'
              hint='უნდა აკმაყოფილებდეს მეილის ფორმატს'
            />
            <Input
              name='phone_number'
              label='ტელეფონის ნომერი'
              hint='უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს'
            />
          </div>
          <div className='w-full flex pr-3 lg:pr-0  py-6 sm:py-14 justify-end'>
            <SubmitButton text='დამატება' px='px-10' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default User

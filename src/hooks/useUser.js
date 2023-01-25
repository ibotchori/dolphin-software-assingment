/* eslint-disable no-unused-vars */

import { Input, PageTitle, RadioButton, Select, Button } from 'components'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserSchema } from 'Schema'
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

const useUser = (date) => {
  const countryList = [
    { id: 1, name: 'საქართველო' },
    { id: 2, name: 'აშშ' },
    { id: 3, name: 'იაპონია' },
    { id: 4, name: 'საფრანგეთი' },
    { id: 5, name: 'გერმანია' },
    { id: 6, name: 'ჩინეთი' },
  ]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { country, sex, surname, name, phone_number, email, age } = useSelector(
    (state) => state.user
  )
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
    resolver: yupResolver(UserSchema),
  })

  useEffect(() => {
    dispatch(setName(watch('name')))
    dispatch(setSurname(watch('surname')))
    dispatch(setAge(watch('age')))
    dispatch(setSex(watch('sex')))
    dispatch(setCounty(watch('country')))
    dispatch(setEmail(watch('email')))
    dispatch(setPhoneNumber(watch('phone_number')))
  }, [watch(), dispatch])

  const onSubmit = (data) => {
    alert('მომხმარებელი წარმატებით დაემატა')
    navigate('/item-list')
  }
  return {
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
  }
}

export default useUser

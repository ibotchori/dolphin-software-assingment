/* eslint-disable no-unused-vars */

import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ItemsSchema } from 'Schema'
import { addItem } from 'features/items/ItemsSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const useAddItem = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    navigate('/item-list')
  }

  return {
    dispatch,
    navigate,
    addItem,
    onSubmit,
    register,
    handleSubmit,
    watch,
    errors,
    dirtyFields,
  }
}

export default useAddItem

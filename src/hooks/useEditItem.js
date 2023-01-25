import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ItemsSchema } from 'Schema'
import { editItem } from 'features/items/ItemsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const useEditItem = () => {
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

  return {
    dispatch,
    navigate,
    editItem,
    onSubmit,
    register,
    handleSubmit,
    watch,
    errors,
    dirtyFields,
  }
}

export default useEditItem

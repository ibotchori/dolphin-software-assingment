import * as yup from 'yup'

const ItemsSchema = yup.object().shape({
  title: yup
    .string()
    .required('სახელი სავალდებულოა.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
  price: yup
    .number()
    .required()
    .positive('ფასი უნდა იყოს დადებითი რიცხვი')
    .typeError('ფასი სავალდებულოა.'),
  quantity: yup
    .number()
    .required()
    .positive('რაოდენობა უნდა იყოს დადებითი რიცხვი')
    .typeError('რაოდენობა სავალდებულოა.'),
})

export default ItemsSchema

import * as yup from 'yup'

const UserSchema = yup.object().shape({
  name: yup
    .string()
    .required('სახელი სავალდებულოა.')
    .matches(/[Ⴀ-\u10fe]$/, 'მხოლოდ ქართული სიმბოლოები.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
  surname: yup
    .string()
    .required('გვარი სავალდებულოა.')
    .matches(/[Ⴀ-\u10fe]$/, 'მხოლოდ ქართული სიმბოლოები.')
    .min(2, 'მინიმუმ 2 სიმბოლო.')
    .max(20, 'მაქსიმუმ 20 სიმბოლო.'),
  age: yup
    .number()
    .required()
    .typeError('ასაკი სავალდებულოა.')
    .min(18, 'ასაკი აუცილებლად უნდა იყოს 18 წელზე მეტი')
    .max(60, 'ასაკი აუცილებლად უნდა იყოს 60 წელზე ნაკელები'),
  sex: yup.string().required(),
  country: yup.string().required(),
  email: yup
    .string()
    .required('მეილი სავალდებულოა.')
    .email('გთხოვთ, მიუთითოთ მეილის ფორმატით.'),
  phone_number: yup
    .string()
    .required('ტელეფონი სავალდებულოა.')
    .matches(/^(\+995)(79\d{7}|5\d{8})$/, 'გთხოვთ, მიუთითოთ +995 ფორმატით'),
})

export default UserSchema

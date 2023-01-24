import { deleteItem } from 'features/items/ItemsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const Table = ({ data }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(deleteItem({ id }))
  }
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-14 max-h-fit'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              დასახელება
            </th>
            <th scope='col' className='px-6 py-3'>
              ფასი
            </th>

            <th scope='col' className='px-6 py-3'>
              რაოდენობა
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
              >
                {item.title}
              </th>
              <td className='px-6 py-4'>{item.price}</td>
              <td className='px-6 py-4'>{item.quantity}</td>
              <td className='px-6 py-4'>
                <span className='font-medium pr-4 text-blue-600 dark:text-blue-500 hover:underline'>
                  Edit
                </span>
                <span
                  onClick={() => handleRemoveItem(item.id)}
                  className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

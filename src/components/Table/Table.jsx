/* eslint-disable no-unused-vars */
import { deleteItem } from 'features/items/ItemsSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Table = ({ data }) => {
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
    dispatch(deleteItem({ id }))
  }

  const handleEditItem = (id) => {
    const existingItem = data.filter((item) => item.id === id)
    console.log('🚀 ~ handleEditItem ~ existingItem', existingItem)
  }
  return (
    <div className='mt-8 flex flex-col'>
      <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                  >
                    დასახელება
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    ფასი
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    რაოდენობა
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                      {item.title}
                    </td>

                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {item.price}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                      {item.quantity}
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                      <Link
                        to={`/item-list/edit-item/${item.id}`}
                        className='text-indigo-600 cursor-pointer hover:text-indigo-900 pr-2'
                      >
                        Edit
                      </Link>
                      <span
                        onClick={() => handleRemoveItem(item.id)}
                        className='text-indigo-600 cursor-pointer hover:text-indigo-900'
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table

import React from 'react'

const Table = ({ data }) => {
  return (
    <table className='table-auto w-full'>
      <thead className='bg-gray-200'>
        <tr className='text-left'>
          <th className='px-4 py-2'>დასახელება</th>
          <th className='px-4 py-2'>ფასი</th>
          <th className='px-4 py-2'>რაოდენობა</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item.id} className='text-left'>
            <td className='border px-4 py-2'>{item.title}</td>
            <td className='border px-4 py-2'>{item.price}</td>
            <td className='border px-4 py-2'>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

import React from 'react'
import {
  decrement,
  increment,
  incrementByAmount,
} from 'features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

const User = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <h1 className='text-3xl font-bold underline text-red-600'>User Page</h1>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment By Amount
          </button>
          <span>{count}</span>
        </div>
      </div>
    </>
  )
}

export default User

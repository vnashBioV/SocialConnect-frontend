import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Spinner({ message }) {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Circles
            // type='Circles'
            color='#00BFFF'
            height={50}
            width={200}
            className="M-5"
        />
        <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

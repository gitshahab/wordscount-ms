import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='border-t-2'>
        <span><p className='my-5 mx-2 bi bi-c-circle text-gray-900 dark:text-gray-100'>{date} Word Counter, All Right Resvered.</p></span>
    </div>
  )
}

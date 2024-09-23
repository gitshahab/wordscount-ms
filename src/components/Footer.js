import React from 'react'

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='border-t-2'>
        <p data-testid="footerText" className='mx-auto p-4 bi bi-c-circle text-gray-900 dark:text-gray-100'>{date} Word Counter, All Right Resvered.</p>
    </div>
  )
}

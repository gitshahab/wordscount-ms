import React from 'react'

export const Title = ({heading, para}) => {
  return (
    <main>
    <div className='flex flex-start items-center md:justify-center my-7 mx-5'>
        <h1 data-testid="titleHeading" className='font-semibold text-xl md:text-3xl text-gray-900 dark:text-gray-100'>{heading}</h1>
    </div>
    <div className='flex flex-start items-center md:justify-center my-5 mx-5'>
        <p data-testid="titleText"className='font-light text-xl md:text-2xl text-gray-900 dark:text-gray-100'>{para}</p>
    </div>
    </main>
  )
}

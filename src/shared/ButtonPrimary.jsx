import React from 'react'

export default function ButtonPrimary({title, handleClick}) {
  return (
    <button
    type="submit"
    className="flex w-full items-center justify-center rounded-md bg-yellow-400 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
    onClick={() => handleClick()}
  >
    {title}
  </button>
  )
}

import React from 'react'

const Button = ({onClick,label,Icon}) => {
  return (
    <button onClick={onClick} className='p-3 flex items-center justify-between gap-7 px-7 bg-primary text-white w-fit rounded-sm hover:bg-slate-300 hover:text-slate-800 duration-150'>
        {label}
        {Icon}
    </button>
  )
}

export default Button
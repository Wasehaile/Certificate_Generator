import React from 'react'

const Button = ({onClick,label}) => {
  return (
    <button onClick={onClick} className='p-3 bg-primary text-white w-80 rounded-sm hover:bg-slate-300 hover:text-slate-800 duration-150'>
        {label}
    </button>
  )
}

export default Button
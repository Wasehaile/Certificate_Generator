import React from 'react'

const Input = ({onChange}) => {
  return (
    <div className=''>
       <input onChange={onChange} type='text' placeholder='Input Name' className='p-3 outline-none border w-80 border-slate-400 rounded-sm'/>
    </div>
  )
}

export default Input
import React from 'react'

const DatePicker = ({onChange}) => {
  return (
    <div>
    <input onChange={onChange} className='w-fit text-slate-700 outline-none border p-3 border-slate-400 rounded-sm' type='date'/>
    </div>
  )
}

export default DatePicker
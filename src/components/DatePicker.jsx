import React from 'react'

const DatePicker = ({onChange}) => {
  return (
    <div>
    <input onChange={onChange} className='w-fit text-slate-700 outline-none' type='date'/>
    </div>
  )
}

export default DatePicker
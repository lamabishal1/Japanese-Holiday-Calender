import React from 'react'

const HolidayItem = ({holiday}) => {
  return (
    <div className='flex flex-col justify-center items-center 
            border-1 border-[#C6E5FF] rounded-3xl w-80 p-5
            mx-auto text-center'>
        <p className='font-bold text-[20px]'>{holiday.name}</p>
        <p className='underline'>{new Date(holiday.date.iso).toLocaleDateString("ja-JP")}</p><br/>
        <p>{holiday.description.endsWith('.') 
        ? holiday.description 
          :holiday.description+'.' }</p>
        <br/>
        </div>
  )
}

export default HolidayItem
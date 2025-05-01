import React from 'react'

const HolidayItem = ({holiday}) => {
  return (
    <div>
        <h3>{holiday.name}</h3>
        <p>{new Date(holiday.date.iso).toLocaleDateString("ja-JP")}</p>
        <p>{holiday.description}</p>
        <br/>
        </div>
  )
}

export default HolidayItem
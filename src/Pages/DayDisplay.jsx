import React from 'react'
import "../index.css"
import MockDBTeacher from "../assets/MockTeacherArr";
const DayDisplay = ({day,today, beforeToday,nameDay}) => {
  console.log(`day:${day}, today:${today},beforeToday:${beforeToday}, nameDay:${nameDay} `)
  return (
    <div className="dayDisplay">
        {nameDay}
    <div style={{color:today?"#fff":"#000", background:beforeToday?"none":today?"#000":"#fff", borderRadius:"0.5rem"}}>{day}</div>
    <div>{MockDBTeacher.users.MikaGi.openLessons[`${day}`]}</div>
    {/* <div className='isSet' style={{textDecoration:"underLine"}}>2pm</div>
    <div>4pm</div> */}
</div>
  )
}

export default DayDisplay
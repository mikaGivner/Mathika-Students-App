import {useState} from 'react';
import { DisplayRowCenter } from '../Style';
import moment from 'moment';
import DayDisplay from './DayDisplay';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/Ai';
export const CalendarManagement=()=> {
    const [firstAtWeek, setFirstAtWeek]= useState(0)
    const NextWeek=()=>{setFirstAtWeek(firstAtWeek-7);}
    const PreWeek=()=>{setFirstAtWeek(firstAtWeek+7);}
    const week=["א","ב","ג","ד","ה"]
    const todayMonthAndYear=moment().subtract(firstAtWeek, 'days').format('ll');
    const ArrThisMonthAndYear= todayMonthAndYear.split(' ');

    console.log(`todayMonthAndYear`)
  return (
    <>
    
     <DisplayRowCenter>        
      <p onClick={PreWeek}>{<AiOutlineArrowLeft/>}</p>
            <h2>{ArrThisMonthAndYear[2]} {ArrThisMonthAndYear[0]}</h2>
      <p onClick={NextWeek}>{<AiOutlineArrowRight/>}</p>
    </DisplayRowCenter>
    <div style={{display:"flex", justifyContent:'space-between'}} >
            {week.map((day,i)=>{
            const curDay=moment().subtract(firstAtWeek+2-i, 'days').format('L');
            let arrCurDay= curDay.split('/');
            return <DayDisplay nameDay={day}
            beforeToday={firstAtWeek-i+1>=0}
            today={firstAtWeek-i===-2} key={i} day={arrCurDay[1]}/>
            })}
    </div>
    </>
  )
}
export default CalendarManagement;

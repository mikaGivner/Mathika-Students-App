import {useState } from 'react';
import "../index.css";
import Styled  from 'styled-components';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/Ai';
import moment from 'moment';
import 'moment/locale/he';
import MockDBTeacher from '../assets/MockTeacherArr';   
    const Scedzual = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    `
    const ScedAdd = Styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    `
    const DayComponent = Styled.div`
    width:5rem;
    min-height:13rem;
    border-left:${props => (props.first === 0 ? `none` : `0.003rem solid #000`)};      
    color: ${props => (props.day=== 0 ? '#000' : props.day< 0 ?'#fff' : `gray`)};
    display:flex;
    align-items:center;
    flex-direction:column;
   `
    const DateTitle = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
   `
    const BtnForSczd = Styled.button`
    background:none;
    border:none;
   `
  function TestLibrary() {
    let todayDateArr= moment().format('llll').split(" " );
    let daysOfWeekArr=['Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thu,', 'Fri,', 'Sat,'];
    let [dayInWeek,setDayInWeek]=useState(daysOfWeekArr.indexOf(todayDateArr[0]));
    let monNyearOfWeek=moment().subtract(dayInWeek, 'days').format('llll').split(" " );
    return (<> 
        <DateTitle><h2>{monNyearOfWeek[1]} {monNyearOfWeek[3]}</h2></DateTitle>
<ScedAdd>
            <BtnForSczd onClick={()=>{
                setDayInWeek(dayInWeek+7);
            }}><AiOutlineArrowLeft/></BtnForSczd>
            <BtnForSczd onClick={()=>{
                setDayInWeek(daysOfWeekArr.indexOf(todayDateArr[0]));
            }}>Back to this week</BtnForSczd>
    
            <BtnForSczd onClick={()=>{
                setDayInWeek(dayInWeek-7);
            }}><AiOutlineArrowRight/></BtnForSczd>
</ScedAdd>
        <Scedzual>
            {daysOfWeekArr.map((allWeek,l)=>{
                return <DayComponent key={l} first={l} day={dayInWeek-l} onClick={(e)=>{
                    // let thisD=moment().format('llll').split(" " );
                    let chooseD=moment().subtract(dayInWeek-l, 'days').format('llll').split(" ");
                    console.log(`${moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2].slice(0, -1)}>=${moment().format('llll').split(" " )[2].slice(0, -1)}`)
                }}>
                    {moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2].slice(0, -1)}

                    { MockDBTeacher[moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[3]]&& MockDBTeacher[moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[3]][moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[1]]&& MockDBTeacher[moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[3]][moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[1]][moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2]] && MockDBTeacher[moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[3]][moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[1]][moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2]].map(wannaD => {
                        return moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[3]===moment().format('llll').split(" " )[3]&& moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[1]===moment().format('llll').split(" " )[1] &&Number(moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2].slice(0, -1))>=Number(moment().format('llll').split(" " )[2].slice(0, -1))&&<div key={Math.random()} style={{fontSize:"0.5rem"}}>{wannaD[0]}</div>
                    })} 
                
                </DayComponent>
            })}
        </Scedzual>
  
    </>)
}
export default TestLibrary
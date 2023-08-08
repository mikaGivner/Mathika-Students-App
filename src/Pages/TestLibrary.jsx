import {useState } from 'react';
import Styled  from 'styled-components';
import moment from 'moment';
import 'moment/locale/he';
   
    const Scedzual = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    `
    const DayComponent = Styled.div`
    width:5rem;
    min-height:13rem;
    background: brown;
    color: ${props => (props.whichDay === 0 ? '#000' : '#fff')};
    display:flex;
    align-items:center;
    flex-direction:column;
    margin:1rem;
`
  function TestLibrary() {
    let todayDateArr= moment().format('llll').split(" " );
    let daysOfWeekArr=['Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thu,', 'Fri,', 'Sat,'];
    let [dayInWeek,setDayInWeek]=useState(daysOfWeekArr.indexOf(todayDateArr[0]));
     let monthOWeek=moment().subtract(dayInWeek, 'days').format('llll').split(" " )[1];
     let yearOfWeek=moment().subtract(dayInWeek, 'days').format('llll').split(" " )[3];
    return (<> 
        <div>This week start in {monthOWeek} {yearOfWeek}</div>

        <Scedzual>
            <button onClick={()=>{
                setDayInWeek(dayInWeek+7);
            }}>pre</button>
            {daysOfWeekArr.map((allWeek,l)=>{
                return <DayComponent key={l} whichDay={dayInWeek-l}>
                    {moment().subtract(dayInWeek-l, 'days').format('llll').split(" ")[2].slice(0, -1)}
                </DayComponent>
            })}
            <button onClick={()=>{
                setDayInWeek(dayInWeek-7);
            }}>next</button>
        </Scedzual>
  
        <button onClick={()=>{
            setDayInWeek(daysOfWeekArr.indexOf(todayDateArr[0]));
        }}>Back to this week</button>
    </>)
}
export default TestLibrary
import { useState } from 'react';
import "../index.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/Ai';
import moment from 'moment';
import 'moment/locale/he';
import MockDBTeacher from '../assets/MockTeacherArr';
import { ScheduleStyle, DayStyle,BtnNonStyle } from '../Style';
function ScheduleTeacher() {
    let todayDateArr = moment().format('llll').split(" ");
    let daysOfWeekArr = ['Sun,', 'Mon,', 'Tue,', 'Wed,', 'Thu,', 'Fri,', 'Sat,'];
    let [dayInWeek, setDayInWeek] = useState(daysOfWeekArr.indexOf(todayDateArr[0]));
    let monNyearOfWeek = moment().subtract(dayInWeek, 'days').format('llll').split(" ");
    let signsToShcedule=[<AiOutlineArrowLeft />, "Back to this week", <AiOutlineArrowRight />];
    const updateDayInWeek = (index)=>{
        index===0 ? setDayInWeek(dayInWeek + 7) : index===1 ? setDayInWeek(daysOfWeekArr.indexOf(todayDateArr[0])) : setDayInWeek(dayInWeek - 7)
    };
    const getFormattedDate = (offset) => {
        return moment().subtract(dayInWeek - offset, 'days').format('llll').split(" ");
    };
    return (<>
        <ScheduleStyle size={"large"}><h2>{monNyearOfWeek[1]} {monNyearOfWeek[3]}</h2></ScheduleStyle>
        <ScheduleStyle size={"small"}>
            {signsToShcedule.map((sign, index)=>{
                return  <BtnNonStyle key={Math.random()} onClick={() => updateDayInWeek(index)}>{sign}</BtnNonStyle>
            })}
        </ScheduleStyle>
        <ScheduleStyle size={"large"}>
            {daysOfWeekArr.map((allWeek, forWeekStartSun) => {
                const formattedDate = getFormattedDate(forWeekStartSun);
                const currentTeacherData = MockDBTeacher[formattedDate[3]]?.[formattedDate[1]]?.[formattedDate[2]];
                const shouldRenderTeacherData =formattedDate[3] === todayDateArr[3] && formattedDate[1] === todayDateArr[1] &&    Number(formattedDate[2].slice(0, -1)) >= Number(todayDateArr[2].slice(0, -1));
                return <DayStyle key={forWeekStartSun} first={forWeekStartSun} day={dayInWeek - forWeekStartSun}>
                {formattedDate[2].slice(0, -1)}
                {shouldRenderTeacherData &&
                    currentTeacherData?.map(wannaD => (
                        <div key={Math.random()} style={{ fontSize: "0.5rem" }}>
                            {wannaD[0]}
                        </div>
                    ))}
            </DayStyle>
            })}
        </ScheduleStyle>
    </>)
}
export default ScheduleTeacher
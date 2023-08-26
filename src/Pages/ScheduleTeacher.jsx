import { useState, useEffect } from 'react';
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
    let [dataArr, setDataArr] = useState([]);
    let [lessonDetails, setLessonDetails] = useState();
    let dayInArr;
    let isDayLesson;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8000/api/v1/newCalendar');
            const data = await response.json();
            setDataArr(data.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
      const SpecificDay=(dayDate)=>{
        dayInArr=dataArr.filter((date) => date.month===dayDate[1] && date.day===dayDate[2] && date.year==dayDate[3]);
        return dayInArr.length!==0 ? isDayLesson=true : isDayLesson=false;
        }
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
                    {SpecificDay(formattedDate)}
                    {isDayLesson && <div>{dayInArr[0].lessons.map((lesson)=>{
                      return lesson[1]!=="" ? <div key={Math.random()} style={{fontSize:"0.8rem", background:"green"}} onClick={()=>{
                        setLessonDetails(`${dayInArr[0].day} ${dayInArr[0].month} ${lesson[0]} ${lesson[1]}`)
                      }}>
                        {lesson[0]} </div> : <div key={Math.random()} style={{fontSize:"0.8rem"}}>
                        {lesson[0]} </div>
                    })}</div>}
            </DayStyle>
            })}
        </ScheduleStyle>
        {lessonDetails!=="" && <div>
        {lessonDetails}</div>}
    </>)
}
export default ScheduleTeacher
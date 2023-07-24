import React from 'react';
import CalenderManagement from './CalendarManagement';
import BoxComponent from './BoxComponent';
function TeacherHome() {
  return (
    <>
    <BoxComponent relevantPage={<CalenderManagement/>} pageToGo="/Teacher/calendar">
    </BoxComponent>
    </>
  )
}
export default TeacherHome;
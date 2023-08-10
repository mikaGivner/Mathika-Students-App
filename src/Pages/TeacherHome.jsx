import React from 'react';
import CalenderManagement from './CalendarManagement';
import TestLibrary from './TestLibrary';
import BoxComponent from './BoxComponent';
function TeacherHome() {
  return (
    <>
      <BoxComponent relevantPage={< TestLibrary/>} pageToGo="/Teacher/tryCalendar">
    </BoxComponent>
    </>
  )
}
export default TeacherHome;
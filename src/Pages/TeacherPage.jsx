import React from 'react'
import { TeacherPageStyle, TeacherHead, LogoPagesStyle,BodyTeacher, BottomUL } from '../Style'
import { Outlet } from "react-router-dom";
function TeacherPage() {
  return (
    <TeacherPageStyle>
        <TeacherHead>
            <LogoPagesStyle/>
            <div style={{marginTop:"1rem", marginRight:"1rem"}}>hey mika</div>
        </TeacherHead>
        <BodyTeacher>
            <Outlet/>
            <BottomUL/>
        </BodyTeacher>
    </TeacherPageStyle>
  )
}
export default TeacherPage
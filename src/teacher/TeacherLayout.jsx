import React from 'react'
import TeacherSidebar from './TeacherSidebar'
import TeacherTopbar from './TeacherTopbar'
import { Outlet } from 'react-router-dom'

function TeacherLayout() {
  return (
    <div className='flex'>
      <TeacherSidebar/>
      <div className='w-full'>

      <TeacherTopbar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default TeacherLayout

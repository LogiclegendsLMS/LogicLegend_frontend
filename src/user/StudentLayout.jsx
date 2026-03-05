import React from 'react'
import StudentSidebar from './StudentSidebar'
import StudentTopbar from './StudentTopbar'
import StudentDashboard from './StudentDashboard'
import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <>
    <div className='flex'>
      <StudentSidebar/>
        <div className='w-full'>

            <StudentTopbar />
            <Outlet/>
        </div>
    </div>
    </>
  )
}

export default StudentLayout

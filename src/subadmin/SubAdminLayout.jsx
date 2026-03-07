import React from 'react'
import AdminSidebar from '../admin/AdminSidebar'
import SubAdminSidebar from './SubAdminSidebar'
import SubAdminTopbar from './SubAdminTopbar'
import { Outdent } from 'lucide-react'
import { Outlet } from 'react-router-dom'

function SubAdminLayout() {
  return (
    <div className='flex'>
      <SubAdminSidebar/>
      <div>

      <SubAdminTopbar/>
      <Outlet/>
      </div>
    </div>
  )
}

export default SubAdminLayout

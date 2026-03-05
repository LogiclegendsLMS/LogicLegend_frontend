import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EduvionLogo from "./components/EduvionLogo";
import MainLayout from "./components/MainLayout";
import AdminLayout from "./admin/AdminLayout";
import AdminDashboard from "./admin/AdminDashboard";
import Mailbox from "./admin/Mailbox";
import { Calendar } from "lucide-react";
import Calender from "./admin/Calender";
import GroupChat from "./admin/GroupChat";
import Courses from "./admin/Courses";
import Analytics from "./admin/Analytics";
import DataTable from "./admin/DataTable";
import Widgets from "./admin/Widgets";
import Security from "./admin/Security";
import AdminProfile from "./admin/AdminProfile";
import AdminSettings from "./admin/AdminSettings";
import HelpCenter from "./admin/HelpCenter";
import NotificationCenter from "./admin/NotificationCenter";

// Pages

import Home from "./pages/Home";

import Login from "./components/Login";
import Signup from "./components/signup";
import AllUser from "./admin/AllUser";
import StudentLayout from "./user/StudentLayout";
import StudentDashboard from "./user/StudentDashboard";
import LiveClassesPage from "./user/LiveClassesPage";
import MyCoursesPage from "./user/MyCoursesPage";
import AssignmentPage from "./user/AssignmentPage";
import QuizPage from "./user/QuizPage";
import ResultPage from "./user/ResultPage";
import AnnouncementsPage from "./user/AnnouncementsPage";
import StudentProfile from "./user/StudentProfile";
import NotificationPage from "./user/NotificationPage";

export default function App() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 3200); // logo animation time

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Splash Screen
  if (!showApp) {
    return <EduvionLogo />;
  }

  // 🔥 Actual Website
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

          {/* <Route path="/singup" element={<Singup/>} />
          */}

          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path="mailbox" element={<Mailbox/>}/>
            <Route path="alluser" element={<AllUser/>}/>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="calendar" element={<Calender/>}/>
            <Route path="chats" element={<GroupChat/>}/>
            <Route path="courses" element={<Courses/>}/>
            <Route path="charts" element={<Analytics/>}/>
            <Route path="tables" element={<DataTable/>}/>
            <Route path="apps" element={<Widgets/>}/>
            <Route path="auth" element={<Security/>}/>
            <Route path="adminprofile" element={<AdminProfile/>}/>
            <Route path="adminsettings" element={<AdminSettings/>}/>
            <Route path="help" element={<HelpCenter/>}/>
            <Route path="notification" element={<NotificationCenter/>}/>

        </Route>

        <Route path="/student" element={<StudentLayout/>}>
        <Route index element={<StudentDashboard/>}/>
        <Route path="live" element={<LiveClassesPage/>}/>
        <Route path="courses" element={<MyCoursesPage/>}/>
        <Route path="assignments" element={<AssignmentPage/>}/>
        <Route path="quizzes" element={<QuizPage/>}/>
        <Route path="results" element={<ResultPage/>}/>
        <Route path="announcements" element={<AnnouncementsPage/>}/>
        <Route path="profile" element={<StudentProfile/>}/>
        <Route path="notification" element={<NotificationPage/>}/>
        
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

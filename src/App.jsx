import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EduvionLogo from "./components/EduvionLogo";
import MainLayout from "./components/MainLayout";

// Pages

import Home from "./pages/Home";
<<<<<<< HEAD
// import Singup from "./components/Singup";
=======
import Login from "./components/Login";
import singup from "./components/singup";
>>>>>>> c40cf165408a2579f22df0e72256799388b65bae


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
<<<<<<< HEAD
          {/* <Route path="/singup" element={<Singup/>} />
          */}
=======
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<singup />} />
         
>>>>>>> c40cf165408a2579f22df0e72256799388b65bae
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

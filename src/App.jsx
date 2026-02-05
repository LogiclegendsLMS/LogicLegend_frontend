import { useEffect, useState } from "react";
import EduvionLogo from "./components/EduvionLogo";
import Home from "./pages/Home";

export default function App() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(true);
    }, 3200); // logo animation duration

    return () => clearTimeout(timer);
  }, []);

  return showLanding ? <Home/> : <EduvionLogo />;
}

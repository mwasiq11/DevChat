import React from "react";
import {
  useUser,
} from "@clerk/clerk-react";
import { Route, Routes,Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProblemPage from "./pages/ProblemPage";
import { Toaster } from "react-hot-toast";

function App() {
  const {isSignedIn}=useUser();
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/problems" element={isSignedIn?<ProblemPage/>:<Navigate to={"/"}/>}/>
    </Routes>
    <Toaster position="top-right" toastOptions={{duration:3000}}/>
    </>
  );
}

export default App;

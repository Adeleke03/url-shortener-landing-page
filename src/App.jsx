import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import MainLayout from './layouts/MainLayout';
import Loader from './utils/Loader';
import Home from './pages/Home';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Suspense fallback={
            <div className="flex justify-center items-center h-screen">
              {" "}
              <Loader/>{" "}
            </div>
          }
        >
    <Routes>
    <Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
</Route>

    </Routes>
    </Suspense>
    
    </BrowserRouter>
     
    </>
  )
}

export default App

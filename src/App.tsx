import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home'
import HomeLayout from './layout/home'
import Detail from './pages/Detail';
import Login from './pages/Auth/Login';
import Auth from './pages/Auth';
import NotFound from './pages/404';
import Cookies from 'js-cookie';
import Register from './pages/Auth/register';

const App = () => {


  const isUserAuthenticated = () => {
    const cookie = Cookies.get('testUserAuthenticated');
    console.log("cookies found", cookie);

    if (cookie) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <Routes>
        {!isUserAuthenticated() &&
          <Route element={<Auth />}>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='*' element={<Navigate to="/signin" />} />
          </Route>
        }
        {isUserAuthenticated() &&
          <Route element={<HomeLayout />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        }
      </Routes>
    </>
  )
}

export default App

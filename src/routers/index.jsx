import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import Signup from '../pages/Signup/Signup';
import Home from '../pages/Home/Home';
import UserLayout from '../components/Layout/User';

export const commonPages = [
  { path: "/", component: Home },
  { path: "/login", component: LoginPage },
  { path: "/signup", component: Signup }
];


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
            {commonPages.map(({ component: Component, path }, index) => {
            return <Route key={index} element={<Component />} path={path} />;
            })}
        </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
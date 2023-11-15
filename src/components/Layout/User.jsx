import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from '../Header/Header';

export default function User() {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function User() {
  return (
    <div>
        <Header />
        <div className='min-h-screen'>
         <Outlet />
        </div>

        <Footer />
    </div>
  )
}

import React from 'react'
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export default function User() {
  return (
    <div>

        <Outlet />
    </div>
  )
}

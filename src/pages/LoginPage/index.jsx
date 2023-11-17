import React, { FC, useRef, useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useCrud  } from "utils/useCrud";
import { useAuth } from "utils/useAuth"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { userLogin, getUser, clearError} from '../../features/authentication/authSlice';




const LoginPage = ({ className = "" }) => {
  const apiVersion = process.env.REACT_APP_API_VERSION
  const baseURL = process.env.REACT_APP_API_ENDPOINT
  const backendUrl = process.env.REACT_APP_API_ENDPOINT;


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const crud = useCrud();

  const {user, token, authenticated, role, error} = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        email: null,
        password: ''
    })

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const roleRef = useRef(false);


  

// logged in user 
const loginHandler =  async () => {

  let body = {
    role: 'customer',
    email: emailRef.current.value,
    password: passwordRef.current.value
  };
        // console.log(roleRef.current.checked)
  dispatch(userLogin(body))
  
}



const [message, setMessage] = useState("")

useEffect(() => {
  if (error) {
      setMessage(error.message)
  }
  if(authenticated){
    if(role== 'admin'){
     navigate('/admin');
    }else{
       navigate('/');

    }
  }

    }, [error, authenticated]);
  
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Ciseco React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        
        <div className="max-w-md mx-auto space-y-6">

          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>

          
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6" >
            
            
              <span className="text-xs text-red-600 text-center">
                {message}
              </span>
           
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email
              </span>
              <Input
                type="text"
                placeholder=""
                className="mt-1"
                ref={emailRef}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link to="/forgot-pass" className="text-sm text-green-600">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" className="mt-1" ref={passwordRef}/>
            </label>

            <ButtonPrimary onClick={() => loginHandler()} type="submit">Continue</ButtonPrimary>
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link className="text-green-600" to="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
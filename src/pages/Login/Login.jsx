/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = () => {
  const [shwoPassword, setShowPassword] = useState(null)
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()
  const handleShowPassword = ()=>{
    setShowPassword((shwoPassword)=>!shwoPassword)
  }
  const handleLogin = event => {
    event.preventDefault()
    console.log(email.current.value, password.current.value)
    if (email.current.value == 'trust@gmail.com' && password.current.value == 'trust123') {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successfully ! ',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/dashboard')
    } else {
      Swal.fire({
        icon: "error",
        position: 'center',
 
      
        title: 'Invalid Email & Password',
        showConfirmButton: false,
        timer: 1500
      })
 
        
     }
  }
  const ref = useRef(null);
  // useEffect(() => {
  //   import("@lottiefiles/lottie-player");
  // });
  return (
    <div>
      <div className="py-5  bg-[#351E98] min-h-screen flex items-center justify-center ">
        <div className="animationWrap">
        <lottie-player
                    id="firstLottie"
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src="/car5.json"
                    className="animation"
                  ></lottie-player>
        </div>
        <div>
          <h2 className="text-4xl capitalize mb-8 font-bold text-white text-center">
            Trust Auto Solution !
          </h2>
          <div className="signUnWrap">
            <form onSubmit={handleLogin}>
              <div className="signupFormWrap">
                <div className="singleSignupForm">
                  <label>Email </label>
                  <input
                    ref={email}
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="inputFiel"
                    autoComplete="off"
                  />
                </div>
                <div className="singleSignupForm passwordWrap">
                  <label>Password</label>
                  <input
                    ref={password}
                    name="password"
                    placeholder="Password"
                    type={shwoPassword ? 'text' : 'password'}
                    className="inputFiel"
                    autoComplete="off"
                  />
               <div onClick={handleShowPassword} className="showIconWrap">
             {shwoPassword ?   <FaEye className="showPassIcon"/> : <FaEyeSlash className="showPassIcon" />}
               </div>
                </div>
                <div className="singleSignupForm">
                  <button type="submit">
                    Login
                  </button>
                </div>
              </div>



              {/* <div className="my-8 signupLine"> </div> */}
              {/* <div className="text-center">
                <p>
                  Don’t have an account an account?
                  <Link to="/">
                    <b className="text-[#351E98]"> Sign Up </b>
                  </Link>
                </p>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

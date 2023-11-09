import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
    const {signin} = useContext(AuthContext)
    const navigate = useNavigate()
      const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
     signin(data.email, data.password)
     .then((data)=>{
      console.log(data)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successfully ! ',
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/dashboard')
     })
     .catch(error=>console.log(error))
    };
    
  return (
    <div>
      <div className="py-5 text-white bg-[#351E98] min-h-screen flex items-center justify-center ">
        <div>
        <h2 className="text-3xl mb-5 font-bold text-center">
          Create A New Account{" "}
        </h2>
        <div className="signUnWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="signupFormWrap">
              <div className="singleSignupForm">
                <label>Email </label>
                <input
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleSignupForm">
                <label>Password</label>
                <input
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleSignupForm">
              <button type="submit">
                Login
              </button>
            </div>
            </div>

            
           
            <div className="my-8 signupLine"> </div>
            <div className="text-center">
              <p>
              Don’t have an account an account?
                <Link to="/">
                  <b className="text-[#351E98]"> Sign Up </b>
                </Link>
              </p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

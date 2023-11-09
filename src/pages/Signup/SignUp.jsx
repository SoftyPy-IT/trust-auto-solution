import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
const Signup = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      createUser(data.email, data.password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser)
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              console.log(data)
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign Up Successfully ! ",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    };
  
  return (
    <div>
      <div className="py-5 text-white bg-[#351E98]">
        <h2 className="text-3xl mb-5 font-bold text-center">
          Create A New Account{" "}
        </h2>
        <div className="signUnWrap">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="signupFormWrap">
              <div className="singleSignupForm">
                <label>Name </label>
                <input
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
              <div className="singleSignupForm">
                <label>Photo </label>
                <input
                  {...register("photo" )}
                  name="photo"
                  placeholder="Photo URL"
                  type="text"
                  className="inputField"
                  autoComplete="off"
                />
              </div>
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
                Sign Up 
              </button>
            </div>
            </div>

            
           
            <div className="my-8 signupLine"> </div>
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <b className="text-[#351E98]"> Login</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

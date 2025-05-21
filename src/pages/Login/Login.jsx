import { useContext, useEffect, useState } from "react";
import loginBg from "../../assets/others/authentication.png";
import loginimg from "../../assets/others/authentication2.png";
import Swal from 'sweetalert2'
// import {
//     loadCaptchaEnginge,
//     LoadCanvasTemplate,
//     validateCaptcha,
//     LoadCanvasTemplateNoReload
// } from 'react-simple-captcha';
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithGoogle, setUser, user,logInWithEmailAndPass } = useContext(AuthContext);
  const navigate =useNavigate()
  const location =useLocation()
  const from = location.state?.from?.pathname || "/";
  // const [captchaInput, setCaptchaInput] = useState('');
  // const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  // useEffect(() => {
  //     loadCaptchaEnginge(6); // load 6 character captcha
  // }, []);

  console.log(user);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInWithEmailAndPass(email, password)
    .then((result)=>{
      const user = result.user;
      
      Swal.fire({
        title: "Well Done",
        icon: "success",
        draggable: true,
      });
      navigate(from, { replace: true });
    })
  };

  const handleSigninWighgoogle = () => {
   
    loginWithGoogle().then((result) => {
      const user = result.user;
        Swal.fire({
        title: "Well Done",
        icon: "success",
        draggable: true,
      });
      navigate(from, { replace: true });
    });
  };

 

  return (
    <div
      className="p-40 flex items-center justify-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="hero min-w-8/12 min-h-10/12 shadow-2xl"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="w-1/2">
            <img src={loginimg} alt="" />
          </div>
          <div className="card w-1/2">
            <div className="card-body">
              <h1 className="font-Inter text-center text-2xl font-bold">
                Login
              </h1>
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label className="label font-bold pb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="label font-bold pb-3">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover text-sm">Forgot password?</a>
                  </div>
                </div>

                {/* <div className='space-y-2'>
                                    <div className='border border-gray-300 rounded p-2 bg-white '>
                                        <LoadCanvasTemplateNoReload />
                                    </div>
                                    <a
                                        onClick={() => {
                                            loadCaptchaEnginge(6);
                                            setIsCaptchaValid(false);
                                            setCaptchaInput('');
                                        }}
                                        className='text-blue-600 text-md font-bold  cursor-pointer'
                                    >
                                        Reload Captcha
                                    </a>
                                    <input
                                        type="text"
                                        value={captchaInput}
                                        onChange={(e) => setCaptchaInput(e.target.value)}
                                        onBlur={() => {
                                            if (validateCaptcha(captchaInput)) {
                                                setIsCaptchaValid(true);
                                            } else {
                                                setIsCaptchaValid(false);
                                            }
                                        }}
                                        className="input input-bordered w-full"
                                        placeholder="Type the captcha here"
                                    />
                                </div> */}

                <button
                  type="submit"
                  className="btn bg-[#D1A054B3] text-white w-full mt-4"
                  // disabled={!isCaptchaValid}
                >
                  Sign In
                </button>
              </form>

              <p className="text-center mt-4 text-sm">
                New here?{" "}
                <Link to={'/signup'} className="text-yellow-600 font-semibold link-hover">
                  Create a New Account
                </Link>
              </p>

              <div className="divider">Or sign in with</div>
              <div className="flex justify-center gap-4">
                <button className="btn btn-circle btn-outline text-xl">
                  <FaFacebook></FaFacebook>
                </button>
                <button
                  onClick={handleSigninWighgoogle}
                  className="btn btn-circle btn-outline"
                >
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline">
                  <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

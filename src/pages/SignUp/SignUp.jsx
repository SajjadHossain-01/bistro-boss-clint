import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginimg from "../../assets/others/authentication2.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
const SignUp = () => {
  const { SignInWithEmailAndPass, setUser,loginWithGoogle } = useContext(AuthContext);
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    SignInWithEmailAndPass(data.email, data.password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user)
      navigate("/");
    })
  };
  const handleSigninWighgoogle = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
      navigate("/");
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
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">
          <div className="w-1/2">
            <img src={loginimg} alt="" />
          </div>
          <div className="card w-1/2">
            <div className="card-body">
              <h1 className="font-Inter text-center text-2xl font-bold">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="label font-bold pb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="name"
                  />
                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div>
                  <label className="label font-bold pb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div>
                  <label className="label font-bold pb-3">Password</label>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                    className="input input-bordered w-full"
                    placeholder="Password"
                  />
                
                </div>

                <button
                  type="submit"
                  className="btn bg-[#D1A054B3] text-white w-full mt-4"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-center mt-4 text-sm text-yellow-600">
              Already registered? {" "}
                <Link
                  to={"/login"}
                  className="text-yellow-600 font-semibold link-hover"
                >
                  Go to log in
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

export default SignUp;

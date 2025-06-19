import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/others/authentication.png";
import loginimg from "../../assets/others/authentication2.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const SignUp = () => {
    const { SignInWithEmailAndPass, loginWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const axiospublic = useAxiosPublic();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
   console.log(data);
const imageFile = { image: data.photoUrl[0] };
const res = await axiospublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
   console.log(res.data.data.display_url)
    SignInWithEmailAndPass(data.email, data.password).then((result) => {
      // Signed up
      

      updateUserProfile(data.name, res.data.data.display_url).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        };
        axiospublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              title: "Well Done",
              icon: "success",
              draggable: true,
            });
            navigate("/");
          }
        });
      });
    });
  };
  const handleSigninWighgoogle = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;

      const userInfo = {
        email: user?.email,
        name: user?.displayName,
      };
      axiospublic.post("/users", userInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Well Done",
            icon: "success",
            draggable: true,
          });
        }
      });
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
                  <label className="label font-bold pb-3">PhotoUrl</label>
                  <input type="file" name="photoUrl"{...register("photoUrl", { required: true })} className="file-input w-full" />
                  {/* <input
                    type="text"
                    name="photoUrl"
                    {...register("photoUrl", { required: true })}
                    className="input input-bordered w-full"
                    placeholder="photoUrl"
                  /> */}
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
                Already registered?{" "}
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

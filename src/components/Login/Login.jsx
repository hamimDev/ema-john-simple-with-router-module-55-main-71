import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Porviders/AuthProvider";

function Login() {
  const { signIn } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setFormData({
          email: "",
          password: "",
        });
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Log in
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address or Phone number
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email tel"
                required
                pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}|[0-9]{10,}"
                title="Enter a valid email address or phone number"
                className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-300 text-black font-medium"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,}"
                  title="Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long."
                  className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-slate-300 text-black font-medium"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </button>

              <div className="grid grid-cols-2">
                <Link
                  className="text-blue-600 hover:text-blue-400 mt-2 flex text-base font-semibold hover:underline  "
                  to="/forgot"
                >
                  Forgotten password?
                </Link>
              </div>

              <div className="text-black text-center flex items-center justify-center mt-2">
                <h1 className="text-base font-medium">New to Ema-Jhon?</h1>
                <Link
                  to="/signup"
                  className="text-red-800 font-semibold ml-2 hover:text-blue-400"
                >
                  Sign up
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 text-black items-center">
              <hr className="border-t border-gray-950 my-4" />

              <p className="text-center">Or</p>
              <hr className="border-t border-gray-950 my-4" />
            </div>
          </form>
          <div className="mt-6 flex justify-center">
            <button className="bg-white text-black flex justify-center items-center hover:bg-slate-200 p-2 w-[100%] border-1 border-black">
              <img
                className="w-8 mr-2"
                src="https://cdn-icons-png.freepik.com/256/281/281764.png?ga=GA1.1.540724036.1706111289&semt=ais"
                alt=""
              />
              <h4 className="text-lg text-gray-600">Continue with Google</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

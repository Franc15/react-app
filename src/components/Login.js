import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="container px-5 py-24 mx-auto flex">
      <div class="hidden md:flex bg-gray-500 ">
        <img src="" alt="" />
      </div>
      <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Enter your login details to access your account.
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="password" class="leading-7 text-sm text-gray-600">
            Paswword
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>

        <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
          Log in
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Have an account? <Link to="signup">Click here.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

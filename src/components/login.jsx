import React from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const Login = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-black"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-center text-xl font-semibold">Login</h2>

        {/* Login Form */}
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // You can handle login logic here
            console.log("Login submitted");
          }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            className="rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default Login;

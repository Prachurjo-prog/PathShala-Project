'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io";

const page = () => {

    const {register,formState: { errors }, handleSubmit} = useForm();
    
      const handleLogin = (data) =>{
        console.log(data)
      }

    return (
        <div className="min-h-[80vh] flex items-center bg-[#F9FAFA] justify-center mt-15">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">
          Login to continue your reading journey
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
            <h3 className="pb-1 font-bold">Name</h3>
            <input
            {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <h3 className="pb-1 font-bold">Email</h3>
            <input
            {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
           <div>
            <h3 className="pb-1 font-bold">Photo URL</h3>
            <input
            {...register("photoUrl", { required: true })}
              type="text"
              placeholder="https://..."
              className="w-full shadow border border-gray-100 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <h3 className="pb-1 font-bold">Password</h3>
            <input
            {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="w-full shadow border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <button className="btn w-full text-white bg-[#10131A] rounded-xl">
            Register
          </button>

          <div>
            <div className="relative flex py-5 items-center">
              <div className="grow border-t border-gray-300"></div>
              <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-gray-400 text-sm uppercase">
                or
              </span>
            </div>
          </div>

          <button className="btn w-full hover:bg-[#E0843E] rounded-xl">
            <IoLogoGoogle className="text-xl" />
            Continue with Google
          </button>

          <span className="text-center gap-2 justify-center flex">
            Already have an account?{" "}
            <Link href="/login" className="font-bold hover:underline">
              Login 
            </Link>
          </span>
        </form>
      </div>
    </div>
    );
};

export default page;
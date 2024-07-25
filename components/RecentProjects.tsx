"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { blogs } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent blogs</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              {blogs.slice(0, 2).map((blog, index) => (
                <PinContainer key={index} {...blog} />
              ))}
            </div>
            <div className="relative">
              <PinContainer {...blogs[2]} />
              <img
                className="w-full mt-4 sm:hidden"
                src={blogs[3].image}
                alt="sitting place"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <PinContainer {...blogs[4]} />
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              {blogs.slice(5, 7).map((blog, index) => (
                <PinContainer key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;

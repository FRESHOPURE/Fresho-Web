"use client";
import React from "react";

interface PinContainerProps {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  dimensions: string;
}

export const PinContainer: React.FC<PinContainerProps> = ({
  id,
  date,
  title,
  description,
  image,
  dimensions,
}) => {
  return (
    <div
      className={`${dimensions} relative group cursor-pointer overflow-hidden`}
    >
      <img
        src={image}
        className="w-full object-cover h-full rounded"
        alt="image description"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10 rounded"></div>
      <div className="relative z-20">
        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
          {date}
        </p>
        <div className="absolute bottom-0 left-0 p-6 transform group-hover:-translate-y-4 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-base leading-4 text-white mt-2">{description}</p>

          <button className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
          </button>
        </div>
      </div>
    </div>
  );
};

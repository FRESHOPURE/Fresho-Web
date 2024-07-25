"use client";
// src/components/BlogCard.js
import React from "react";

export const PinContainer = ({
  date,
  title,
  description,
  image,
  dimensions,
  onClick,
}) => {
  return (
    <div className={`${dimensions} relative group cursor-pointer`}>
      <div>
        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
          {date}
        </p>
        <div className="absolute bottom-0 left-0 p-6 transform group-hover:-translate-y-4 transition duration-300 ease-in-out">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-base leading-4 text-white mt-2">{description}</p>
          <button
            onClick={onClick}
            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
          >
            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
          </button>
        </div>
      </div>
      <img
        src={image}
        className="w-full object-cover h-full"
        alt="image description"
      />
    </div>
  );
};

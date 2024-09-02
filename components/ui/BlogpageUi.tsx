// "use client";
// import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import { blogpage } from "@/data";
// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "../MagicButton";
// import { TextGenerateEffect } from "./TextGenerateEffect";

// export const BlogpageUi: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const blog = blogpage.find((b) => b.id === id);
//   const topRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (topRef.current) {
//       topRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   if (!blog) {
//     return <div>blog not found</div>;
//   }

//   return (
//     <section
//       id="blogpage"
//       ref={topRef}
//       className="dark:bg-gray-100 dark:text-gray-800"
//     >
//       <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
//         <a
//           rel="noopener noreferrer"
//           href="#"
//           className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
//         >
//           <img
//             src={`${blog.image}`}
//             alt="main"
//             className="object-cover w-full h-64 rounded-xl sm:h-96 lg:col-span-7 dark:bg-gray-500 shadow-xl"
//           />
//           <div className="p-6 space-y-2 lg:col-span-5">
//             <h3>
//               <TextGenerateEffect
//                 words={blog.title}
//                 className="text-md font-semibold sm:text-4xl group-hover:underline group-focus:underline"
//               />
//             </h3>
//             <span className="text-xs dark:text-gray-600">{blog.date}</span>
//             <p>{blog.description}</p>
//           </div>
//         </a>
//         <p>{blog.para}</p>
//         <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           <a
//             rel="noopener noreferrer"
//             href="#"
//             className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
//           >
//             <img
//               role="presentation"
//               className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
//               src={`${blog.image1}`}
//             />
//             <div className="p-6 space-y-2">
//               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
//                 {blog.title1}
//               </h3>
//               <span className="text-xs dark:text-gray-600">{blog.date1}</span>
//               <p>{blog.description1}</p>
//             </div>
//           </a>
//           <a
//             rel="noopener noreferrer"
//             href="#"
//             className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
//           >
//             <img
//               role="presentation"
//               className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
//               src={`${blog.image2}`}
//             />
//             <div className="p-6 space-y-2">
//               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
//                 {blog.title2}
//               </h3>
//               <span className="text-xs dark:text-gray-600">{blog.date2}</span>
//               <p>{blog.description2}</p>
//             </div>
//           </a>
//           <a
//             rel="noopener noreferrer"
//             href="#"
//             className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
//           >
//             <img
//               role="presentation"
//               className="object-cover w-full rounded h-44 dark:bg-gray-500 shadow-xl"
//               src={`${blog.image3}`}
//             />
//             <div className="p-6 space-y-2">
//               <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-[#ccb9ff]">
//                 {blog.title3}
//               </h3>
//               <span className="text-xs dark:text-gray-600">{blog.date3}</span>
//               <p>{blog.description3}</p>
//             </div>
//           </a>
//         </div>
//         <div className="flex justify-center">
//           <MagicButton
//             title="Back to Home"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

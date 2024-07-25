import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Why choose<span className="text-purple"> Freshopure?</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor: "#fff",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <ul>
                {card?.points?.map((item, index) => (
                  <li className="flex text-black my-6 items-center" key={index}>
                    <img
                      src={item.thumbnail}
                      alt={item.thumbnail}
                      className="w-5 h-5 mr-3"
                    />
                    <span className="text-lg">{item?.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;

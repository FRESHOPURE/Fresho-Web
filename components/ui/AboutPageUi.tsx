"use client";
import React from "react";

const AboutPageUi = () => {
  return (
    <section>
      <div id="about" className="py-16">
        <h1 className="heading mb-20">
          About <span className="text-purple"> Freshopure</span>
        </h1>
        <div className="container m-auto px-2">
          <div className="lg:flex justify-between items-center">
            <div className="lg:w-6/12 lg:p-0 p-7">
              <h1 className="text-2xl font-bold leading-tight mb-5 capitalize">
                {" "}
                Elevating Hotel and Vendor Partnerships{" "}
                <span className="text-[#ccb9ff]">
                  with Precision and Elegance
                </span>{" "}
              </h1>
              <p className="text-base">
                At FRESHOPURE, we revolutionize the supply chain with our
                advanced SaaS platform, crafted to seamlessly connect hotels and
                vendors. Hotels can efficiently order a diverse range of
                supplies through our intuitive interface, ensuring they receive
                top-quality products with ease. Vendors benefit from expanded
                market access, allowing them to grow their business and
                establish valuable connections. Our platform is designed to
                enhance operational efficiency, offering a sophisticated,
                user-centric experience that transforms traditional processes.
                With FRESHOPURE, we set a new standard in supply chain
                excellence, fostering collaboration and elevating business
                opportunities for both hotels and vendors.{" "}
              </p>
            </div>
            <div className="lg:w-5/12 order-2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="rounded transform scale-2  rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageUi;

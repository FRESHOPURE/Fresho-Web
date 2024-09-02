// src/app/page.tsx
"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import AboutPageUi from "@/components/ui/AboutPageUi";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <AboutPageUi />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
        {/* <Blogpage/> */}
      </div>
    </main>
  );
};

export default Home;

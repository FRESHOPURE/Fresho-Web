"use client";

import React from "react";
import Mainpage from "./mainpage";
import { BlogpageUi } from "@/app/blog/[id]";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/blog/:id" element={<BlogpageUi />} />
      </Routes>
    </Router>
  );
};

export default Home;

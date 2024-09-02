"use client"
import React from 'react';


import { blogpage } from '@/data';
import { Blogpage } from './ui/BlogpageUi';

 const BlogSection = () =>{
    return (
      <div>
        {blogpage.map((content, index) => (
          <Blogpage key={index} {...content} />
        ))}
      </div>
    );

}

export default BlogSection;

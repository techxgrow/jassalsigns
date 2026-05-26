import React from 'react';
import Head from 'next/head';
import { data } from "../../../assets/data.js";
import CityNavbar from '@/components/navbar/CityNavbar.jsx';
import CityFooter from '@/components/CityFooter.jsx';
import Link from 'next/link';

const BlogsListing = () => {
  return (
    <div>
      <Head>
        <title>Our Blogs | Jassal Signs</title>
        <meta name="description" content="Read the latest insights and news about branding, signage, and marketing from Jassal Signs." />
      </Head>
      <CityNavbar />
      
      {/* Hero Section */}
      <div 
        className="relative bg-no-repeat bg-bottom bg-cover text-white flex justify-center items-center"
        style={{
          backgroundImage: "url('/blogsbg.jpg')",
          height: '400px',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className='flex flex-col justify-center gap-4 items-center z-10'>
          <h2 className="text-5xl font-bold uppercase">Our Blogs</h2>
          <h4 className="text-md font-semibold">Home {'>'} Blogs</h4>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-[1280px] mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.blogPage.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
              <div className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="overflow-hidden h-60 relative">
                  <img src={blog.image} alt={blog.heading} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-[#ED1D26] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Branding
                  </div>
                  {/* Elegant Branding Logo Watermark */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-xl shadow-md border border-gray-100/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <img src="/logo.png" alt="Jassal Signs" className="h-6 w-auto object-contain" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#ED1D26] transition-colors">{blog.heading}</h3>
                  <div className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.desc.replace(/<[^>]*>?/gm, '').substring(0, 150) + '...' }}></div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-[#ED1D26] font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read More <span className="text-lg">→</span>
                    </span>
                    <img src={blog.userImage} alt="Author" className="w-8 h-8 rounded-full border-2 border-gray-100 shadow-sm" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CityFooter />
    </div>
  );
};

export default BlogsListing;

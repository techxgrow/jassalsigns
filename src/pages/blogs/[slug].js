import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { data } from "../../../assets/data.js";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import CityFooter from '@/components/CityFooter.jsx';
import CityNavbar from '@/components/navbar/CityNavbar.jsx';
import { ClipLoader } from "react-spinners";

const BlogPage = () => {
  const router = useRouter();
  const [blogData, setBlogData] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [loading, setLoading] = useState(false);

  const override= {
  display: "block",
  margin: "0 auto",
  border: "4px solid red",

};

  useEffect(() => {
    if (!router.query.slug) return;

    const blogList = data.blogPage;
    const index = blogList.findIndex((blog) => blog.id == router.query.slug);

    if (index !== -1) {
      setBlogData(blogList[index]);
      setCurrentIndex(index);

      const filtered = blogList.filter((_, i) => i !== index);
      setRecentBlogs(filtered);
    }
  }, [router.query.slug]);

  // Handle loader with minimum display time
  useEffect(() => {
    let timeout;

    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      timeout = setTimeout(() => {
        setLoading(false);
      }, 500); // Minimum 500ms duration
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      clearTimeout(timeout);
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  const handleNavigation = (direction) => {
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < data.blogPage.length) {
      const newBlog = data.blogPage[newIndex];
      router.push(`/blogs/${newBlog.id}`);
    }
  };

  return (
    <div>
      {/* Loader Overlay */}
      {loading && (
      <div className="fixed inset-0 bg-gray-700/30 backdrop-blur-md z-50 flex items-center justify-center">
   <ClipLoader
        color={"red"}
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>
      )}

      <CityNavbar />

      {/* Hero Section */}
      <div
        className="relative bg-no-repeat bg-bottom bg-cover text-white flex justify-center items-center "
        style={{
          backgroundImage: "url('/blogsbg.jpg')",
          height: '400px',
        }}
      >
        <div className="absolute inset-0 bg-black/30 "></div>
        <div className='flex flex-col justify-center gap-4 items-center'>
        <h2 className="text-5xl relative font-bold z-10">BLOGS</h2>
       <h4 className="text-md font-semibold">{`blogs > ${router.query.slug}`}</h4>
       </div>
      </div>

      {/* Content Grid */}
      <div className="md:max-w-[90vw] max-w-[95vw]  mx-auto grid grid-cols-[68%_30%] gap-[2%] my-10">
        {/* Left Content */}
        <div className='border-0 border-r-1 border-gray-400 pr-2'>
          <div className='flex gap-6'>
            <div className="flex-1">
              <img
                src={`${blogData?.image}`}
                alt="Blog"
                className="w-[450px] object-cover rounded-md"
              />
            </div>
            <div className="flex-1 flex flex-col justify-start gap-4 py-5">
              <h2 className="text-4xl font-bold text-black">{blogData?.heading}</h2>
              <p className="text-xl text-red-700">Category: Branding</p>
              <div className="flex space-x-4 text-xl text-white">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-800 p-2 rounded-full">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div dangerouslySetInnerHTML={{ __html: `${blogData?.desc}` }} className='my-5 text-[20px]' />

          {/* Author Info */}
          <div className="flex items-center justify-between pt-5 mt-10 text-gray-600 text-sm">
            <div className="flex items-center gap-3">
              <img src={`${blogData?.userImage}`} className="w-12 h-12 rounded-full object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-xl text-black">John Doe</p>
                <p className="text-[18px]">Posted on May 12, 2025 at 11:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className='overflow-hidden'>
          <div className='bg-[#ED1D26] p-2'>
            <h2 className='text-white text-3xl font-bold'>RECENT BLOGS</h2>
          </div>
          <ul className="pl-2">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog, index) => (
                <li
                  key={index}
                  className='grid grid-cols-[35%_65%] my-4 cursor-pointer'
                  onClick={() => router.push(`/blogs/${blog.id}`)}
                >
                  <img src={`${blog.image}`} alt='image' className='rounded-md' />
                  <h4 className='text-xl pl-2 text-black'>{blog.heading}</h4>
                </li>
              ))
            ) : (
              <h3 className='text-gray-500 px-4 py-3'>No blogs to show.</h3>
            )}
          </ul>
        </div>
      </div>

      {/* Next / Previous Navigation */}
      <div className="flex max-w-[1280px] mx-auto border-y border-gray-400 mb-10 py-5 justify-between px-10 mt-10 space-x-4">
        <button
          onClick={() => handleNavigation('prev')}
          disabled={currentIndex <= 0}
          className={`px-4 py-2 outline-none  ${
            currentIndex <= 0
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#ED1D26] text-white'
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handleNavigation('next')}
          disabled={currentIndex >= data.blogPage.length - 1}
          className={`px-4 py-2 outline-none  ${
            currentIndex >= data.blogPage.length - 1
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-[#ED1D26] text-white'
          }`}
        >
          Next
        </button>
      </div>

      <CityFooter />
    </div>
  );
};

export default BlogPage;

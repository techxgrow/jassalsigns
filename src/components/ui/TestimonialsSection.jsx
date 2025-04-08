"use client";

import { IconArrowLeft, IconArrowRight, IconStar, IconStarHalf, IconStarFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IconStarFilled key={`full-${i}`} className="text-orange-500 w-5 h-5" />);
  }

  if (hasHalf) {
    stars.push(<IconStarHalf key="half" className="text-orange-500 w-5 h-5" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<IconStar key={`empty-${i}`} className="text-orange-300 w-5 h-5" />);
  }

  return stars;
};

export const TestimonialsSection = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto md:h-[100vh] px-4 py-28 font-sans antialiased md:px-8 lg:px-32" id="product">
      <div className="mb-[30px] text-center" data-aos="fade-up">
        <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">What Our Clients Say</p>
        <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">
          TESTIMONIALS<span className="text-orange-600"></span>
        </h1>
      </div>
      <div className="relative grid grid-cols-1 lg:gap-8 gap-6 md:grid-cols-2">
        <div className="flex justify-center lg:block">
          <div className="relative lg:h-[40vh] h-[30vh] lg:w-[20vw] w-[40vh]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={1000}
                    height={800}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="text-center md:text-left">
              <h3 className="lg:text-3xl text-3xl font-bold text-gray-900 dark:text-white">
                {testimonials[active].name}
              </h3>
              <div className="flex justify-center md:justify-start mt-2">
                {renderStars(testimonials[active].rating)}
              </div>
            </div>
            <motion.p className="mt-8 text-[16px] text-center md:text-left md:text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].comments.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 justify-center md:justify-start md:pt-12 pt-6">
            <button
              onClick={handlePrev}
              className="group/button flex md:h-16 md:w-16 h-12 w-12 items-center border border-black justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex md:h-16 md:w-16 h-12 w-12 items-center border border-black justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
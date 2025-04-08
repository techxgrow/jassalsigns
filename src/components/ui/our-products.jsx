"use client";;
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const OurProducts = ({
  testimonials,
  autoplay = false
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

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
    (<div
      className="mx-auto  px-4 py-28 font-sans antialiased  md:px-8 lg:px-32" id="product">
         <div className=" md:mb-[40px] mb-[30px] text-center" data-aos="fade-up">
          <p className="md:text-2xl text-xl text-orange-600 uppercase mb-3">What Our Clients Say</p>
          <h1 className="md:text-6xl text-4xl text-gray-900 font-extrabold">
            OUR PRODUCTS<span className="text-orange-600"></span>
          </h1>
        </div>
      <div className="relative grid grid-cols-1 lg:gap-16 gap-10 md:grid-cols-2 ">
        <div className="flex justify-center lg:block">
          <div className="relative lg:h-[60vh] h-[40vh] lg:w-[32vw] w-[40vh] ">
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
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
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
                  className="absolute inset-0 origin-bottom">
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={1000}
                    height={800}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}>
            <h3 className="lg:text-5xl leading-1 text-center md:text-left lg:leading-0 text-3xl font-bold text-gray-900 dark:text-white">
              {testimonials[active].name}
            </h3>
            {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p> */}
            <motion.p className="mt-8 text-xl text-center md:text-left md:text-2xl text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 justify-center md:justify-start md:pt-12 pt-6">
            <button
              onClick={handlePrev}
              className="group/button flex md:h-16 md:w-16 h-12 w-12 items-center  border border-black justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowLeft
                className="h-8 w-8 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex md:h-16 md:w-16 h-12 w-12 items-center border border-black justify-center rounded-full bg-gray-100 dark:bg-neutral-800">
              <IconArrowRight
                className="h-8 w-8  text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>)
  );
};

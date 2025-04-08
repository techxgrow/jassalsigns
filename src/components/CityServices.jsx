"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function CityServices() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: window.innerHeight * 0.2, // 20% of viewport height
      once: false, // Animation triggers multiple times
      mirror: true, // Applies animation when scrolling back up
    });
  }, []);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} data-aos="fade-up" />
  ));

  return (
    <section className="w-full h-full py-20 border-2 " data-aos="fade-up">
     
      <Carousel items={cards} />
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            data-aos="flip-up"
            data-aos-anchor-placement="top-bottom"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "CHANNEL LETTERS",
    title: "Attractive outdoor signs for all businesses - Outshine your competition with large 3D sign letters",
    src: "/cityservices/pic-1.jpg",
    content: <DummyContent />,
  },
  {
    category: "INDOOR SIGNS",
    title: "Improve customer experience and make your premises safer with professional indoor signs. Mega Signs is the one stop show for all your indoor signage needs in Edmonton",
    src: "/cityservices/pic-2.jpg",
    content: <DummyContent />,
  },
  {
    category: "PYLON SIGNS",
    title: "Grow brand awareness generate leads from afar and became a local landmark with signage that towers above the competition",
    src: "/cityservices/pic-3.jpg",
    content: <DummyContent />,
  },
  {
    category: "VERHICLES WRAPS",
    title: "Branded vehicles are one of the most effective ways of growing your brand make an impact in your community with custom vehicles wraps for your commeercial vehicles",
    src: "/cityservices/pic-4.jpg",
    content: <DummyContent />,
  },
  
];


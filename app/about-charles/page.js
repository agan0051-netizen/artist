"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";

export default function AboutPage() {
  const sections = [
    {
      title: "Our Story",
      text: `Charles and Ray Eames began their partnership in the early 1940s, uniting their individual expertise in architecture, painting, and design. Together, they built the Eames Office in Venice, California — a collaborative studio that blurred the boundaries between art and industrial design. Their philosophy was rooted in experimentation, where mistakes were embraced as a natural step in the learning process.`,
      amber: true,
      image: "/images/our story.jpg",
    },
    {
      title: "Design Influence",
      text: `The Eames Office transformed the language of modern furniture by pioneering new manufacturing techniques. Their bent plywood chairs showcased compound curves never seen before. Later, fiberglass and molded plastic allowed them to create durable, affordable designs for the masses. Beyond furniture, their philosophy extended to exhibitions, films, and graphics — making design a living, evolving process.`,
      amber: false,
      image: "/images/design influence.jpg",
    },
    {
      title: "Enduring Impact",
      text: `The Eameses left a lasting imprint on design, education, and culture. Their work inspired filmmakers, architects, and designers to explore new ways of thinking about form and function. The Eames Office pioneered educational workshops, exhibitions, and multimedia projects that encouraged curiosity and experimentation.`,
      amber: true,
      image: "/images/legacy.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((sec, idx) => {
      if (!sec) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveIndex(idx);

            if (entry.isIntersecting) {
              entry.target.querySelectorAll(".animate-fade").forEach((el) => {
                el.classList.remove("opacity-0", "translate-y-8");
                el.classList.add("opacity-100", "translate-y-0");
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      obs.observe(sec);
      return obs;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <main
      className="h-screen w-full overflow-y-scroll scroll-smooth
                 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-EbyyZfYD86AZJJJbHAQmQWXgGtS-p9fsw&s')]
                 bg-cover bg-center bg-no-repeat"
    >
      <Header />

      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <section
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className={`snap-start min-h-screen flex items-center justify-center 
                       px-6 md:px-20 py-16 transition-colors duration-700
                       ${sec.amber ? "bg-blue-950/40" : "bg-transparent"}`}
          >
            <div
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 md:gap-20 max-w-7xl items-center`}
            >
          
              <Image
                src={sec.image}
                alt={sec.title}
                width={600}
                height={400}
                className="w-full md:w-1/2 rounded-lg shadow-lg object-cover opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade"
              />

             
              <div className="w-full md:w-1/2 opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade text-center md:text-left">
                <h2 className="text-4xl md:text-[48pt] font-[BASKERVILLE] font-light text-amber-50 mb-6 leading-snug">
                  {sec.title}
                </h2>
                <p className="text-base md:text-xl font-[avenir] text-amber-50 leading-relaxed">
                  {sec.text}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
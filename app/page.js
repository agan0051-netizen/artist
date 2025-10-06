"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BioSection from "./components/BioSection";
import Timeline from "./components/Timeline";
import Divider from "./components/Divider";
import Summary from "./components/Summary";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);


  const animated = `transition-all duration-700 ease-out transform ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <main
      className="h-screen w-full overflow-y-scroll scroll-smooth
                 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-EbyyZfYD86AZJJJbHAQmQWXgGtS-p9fsw&s')]
                 bg-cover bg-center bg-no-repeat"
    >
    
      <Header />

      <section
        className={`snap-start h-screen flex items-center justify-center bg-transparent rounded-2xl  ${animated}`}
      >
        <div className="text-center px-6 md:px-20">
          <Hero />
        </div>
      </section>

      <section
        className={`snap-start h-screen flex items-center justify-center bg-blue-950/20 rounded-4xl  ${animated}`}
      >
        <div className="text-center px-6 md:px-20">
          <BioSection />
        </div>
      </section>

      <section
        className={`snap-start h-screen flex items-center justify-center bg-transparent rounded-2xl ${animated}`}
      >
        <div className="text-left px-6 md:px-20">
          <Timeline />
        </div>
      </section>

      <section
        className={`snap-start h-screen flex items-center justify-center rounded-4xl bg-blue-950/20 ${animated}`}
      >
        <div className="text-left px-6 md:px-20">
          <Summary />
        </div>
      </section>

      <section
        className={`snap-start h-100 flex items-center justify-center bg-transparent ${animated}`}
      >
        <div className="text-left px-6 md:px-20">
          <Awards />
        </div>
      </section>

      <section
        className={`snap-start h-50 flex items-center justify-center rounded-2xl  ${animated}`}
      >
        <div className="text-left px-6 md:px-20">
          <Footer />
        </div>
      </section>
    </main>
  );
}
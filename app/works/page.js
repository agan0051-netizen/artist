"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer
 from "../components/Footer";
export default function Works() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); 
  }, []);

  const sections = [
    {
      heading: "FURNITURE DESIGN",
      items: [
        {
          image: "/images/LCW : DCW Chairs.webp",
          title: "LCW / DCW Chairs",
          subtitle: "Molded plywood chairs, 1945",
        },
        {
          image: "/images/Lounge Chair & Ottoman.jpg",
          title: "Lounge Chair & Ottoman",
          subtitle: "Iconic Herman Miller piece, 1956",
        },
        {
          image: "/images/aluminium.jpg",
          title: "Aluminum Group Chairs",
          subtitle: "Indoor-outdoor seating, 1958",
        },
      ],
    },
    {
      heading: "ARCHITECTURE",
      items: [
        {
          image: "/images/eames house .jpeg",
          title: "Eames House",
          subtitle: "Case Study House No. 8, 1949",
        },
        {
          image: "/images/interiors.jpg",
          title: "Interior Experiments",
          subtitle: "Innovative modular design",
        },
        {
          image: "/images/adaptive living spaces.jpg",
          title: "Adaptive Living Spaces",
          subtitle: "Blending function with form",
        },
      ],
    },
    {
      heading: "FILM & MEDIA",
      items: [
        {
          image: "/images/GA_FPo037a-scaled.jpg",
          title: "Powers of Ten",
          subtitle: "Film exploring magnitudes, 1977",
        },
        {
          image: "/images/design films.jpg",
          title: "Design Films",
          subtitle: "Documenting creative practice",
        },
        {
          image: "/images/EH_MApDb006--scaled.jpg",
          title: "Mathematica",
          subtitle: "IBM-sponsored exhibition, 1961",
        },
      ],
    },
    {
      heading: "EXHIBITIONS & INSTALLATIONS",
      items: [
        {
          image: "/images/moma.jpg",
          title: "MoMA Show",
          subtitle: "Furniture installations",
        },
        {
          image: "/images/international exhibition.jpg",
          title: "International Exhibitions",
          subtitle: "Modernist showcases",
        },
        {
          image: "/images/interactive.jpg",
          title: "Interactive Installations",
          subtitle: "Merging art & science",
        },
      ],
    },
    {
      heading: "TEXTILE & GRAPHICS",
      items: [
        {
          image: "/images/eames textile.jpg",
          title: "Eames Textiles",
          subtitle: "Patterns & colors",
        },
        {
          image: "/images/exhibition poster.jpg",
          title: "Exhibition Posters",
          subtitle: "Playful graphic design",
        },
        {
          image: "/images/textile experiment.jpg",
          title: "Textile Experiments",
          subtitle: "Geometric explorations",
        },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden
                 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-EbyyZfYD86AZJJJbHAQmQWXgGtS-p9fsw&s')]
                 bg-cover bg-center bg-no-repeat scroll-smooth"
    >
      <Header />

      <section className="max-w-8xl mx-auto px-6 py-10 text-gray-900 ">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`mb-16 transition-all duration-700 ease-out transform ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              className={`mt-30 text-[48pt] ml-5 font-[sf pro] text-left font-light mb-6 text-lime-50 tracking-normal transition-all duration-700 ease-out transform ${
                show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {section.heading}
            </h3>

            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 font-[avenir] transition-all duration-700 ease-out transform ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {section.items.map((item, i) => (
                <Card
                  key={i}
                  imageSrc={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
       <Footer />
    </main>
  );
}
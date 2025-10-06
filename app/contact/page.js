"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function ContactPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  
    setShow(true);
  }, []);

  return (
    <main
      className="min-h-screen w-full overflow-x-hidden
                 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-EbyyZfYD86AZJJJbHAQmQWXgGtS-p9fsw&s')]
                 bg-cover bg-center bg-no-repeat scroll-smooth"
    >
      <Header />

      <section className="max-w-8xl mx-10 px-6 mt-50 text-amber-50 font-[avenir]">
        <h1
          className={`text-[56pt] font-[baskerville] font-light text-amber-50 transition-all duration-700 ease-out transform ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">

          <div
            className={`flex flex-col justify-center gap-8 transition-all duration-700 ease-out transform ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-lime-50 leading-relaxed">
              We love to hear from you! Drop us a message below.
            </p>

            <div className="space-y-4">
              <p className="text-lg md:text-xl font-semibold text-amber-50">Address:</p>
              <p className="text-lime-50">123 Design Street, Venice, CA, USA</p>

              <p className="text-lg md:text-xl font-semibold text-amber-50">Email:</p>
              <p className="text-lime-50">hello@eamesoffice.com</p>

              <p className="text-lg md:text-xl font-semibold text-amber-50">Phone:</p>
              <p className="text-lime-50">+1 (555) 123-4567</p>
            </div>
          </div>

          
          <form
            className={`bg-amber-50/10 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-6 shadow-lg transition-all duration-700 ease-out transform ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 p-4 rounded-lg border border-amber-50/50 bg-transparent text-amber-50 placeholder:text-lime-50 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-4 rounded-lg border border-amber-50/50 bg-transparent text-amber-50 placeholder:text-lime-50 outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-lg border border-amber-50/50 bg-transparent text-amber-50 placeholder:text-lime-50 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="p-4 rounded-lg border border-amber-50/50 bg-transparent text-amber-50 placeholder:text-lime-50 outline-none resize-none"
            />
            <button
              type="submit"
              className="self-start px-8 py-4 bg-lime-50 text-blue-950 font-semibold rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative pt-5 flex items-center px-6 md:px-20 bg-transparent">
      <div className="flex-1 flex justify-start">
        
      </div>

      <div className="justify-center items-end w-400px text-left">
        <p className=" mt-2 text-3xl font-regular font-[avenir] text-lime-50 leading-relaxed">
          <span className="font-bold">Charles and Ray Eames </span> were a husband-and-wife design team whose Eames Office shaped modern architecture, furniture, film, and visual communication. Their work bridged craft and mass-production—pioneering bent plywood, fiberglass shells, and human-centered ergonomics. Among their best-known pieces are the Eames Lounge Chair and the molded plywood and plastic seating systems; they also created influential films and exhibitions like Powers of Ten and Mathematica.
        </p>
      </div>
    </section>
  );
}
import Image from "next/image";

export default function Summary() {
  return (
    <section className="relative  pt-30 px-6 md:px-20">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-8 h-140 justify-items-normal mb-5 object-bottom">

        <Image
          src="/images/GA_FPo037a-scaled.jpg"
          alt="poster of eames film power of tens"
          width={300}
          height={150}
          className="rounded-md shadow-md object-cover"
        />
        <Image
          src="/images/charles-ray-eames-institute-tables-exhibition-designboom-01 copy.jpg"
          alt="Eames tables view"
          width={300}
          height={150}
          className="rounded-md shadow-md object-cover"
        />
       <Image
          src="/images/EH_MApDb006--scaled.jpg"
          alt="black and white image of mathematica exhibit"
          width={300}
          height={150}
          className="rounded-md shadow-md object-cover"
        />
        </div>

      <div className="mt-6 mb-30 text-2xl font-light font-[avenir] text-lime-50 leading-relaxed">
        <p>
          They produced over a hundred short films—some documenting processes and exhibits, 
          others turning everyday phenomena into visual studies. Their exhibitions 
          (notably <i>Mathematica</i> and <i>A Computer Perspective</i>) reframed complex 
          ideas with playful clarity and hands-on interaction.
        </p>


      </div>
    </section>
  );
}
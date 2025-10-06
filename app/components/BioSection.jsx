import Image from "next/image";

export default function BioSection() {
  return (
  <section className="relative py-12 px-6 md:px-20">
  <div className="max-w-8xl mx-auto mb-12 text-amber-50 font-[Avenir] text-3xl leading-normal pt-20 flex flex-col md:flex-row items-start gap-8">
    
  
    <div className="md:w-1/2">
      <p>
        Operating in Venice, California from 1943 to 1988, the Eames Office
        worked long, collaborative days with a rotating team of talented
        designers. Their approach—<i className="font-black">learning by doing</i>—combined rapid prototyping with rigorous attention to materials and human needs.
      </p>
      <p className="mt-4">
        Material & manufacturing innovations (short): bent plywood shells, compound curves with heat/pressure, later fiberglass for mass-produced seating; ergonomic standards that influenced office furniture.
      </p>
    </div>

    
    <div className="md:w-1/2 relative h-48 md:h-140">
      <Image
        src="/images/3a1a33508684349d9039cb00bd281974 Background Removed.png" 
        alt="Eames Office"
        fill
        
      />
    </div>

  </div>
</section>
  );
}
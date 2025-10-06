import Image from "next/image";

export default function Card({ imageSrc, title, subtitle }) {
  return (
    <div className="bg-blue-950/10 rounded-4xl shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:scale-105 transform transition duration-300 min-h-[320px]">
      
      <div className="w-full h-140 overflow-hidden flex items-center justify-center mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full rounded-4xl"
        />
      </div>

   
      <h3 className="text-lg font-semibold text-amber-50 line-clamp-1">{title}</h3>
      <p className="text-sm text-amber-50 line-clamp-2">{subtitle}</p>
    </div>
  );
}
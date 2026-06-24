import Image from "next/image";

export default function Clients() {
const clients = [
"/clients/client-1.svg",
"/clients/client-2.svg",
"/clients/client-3.svg",
"/clients/client-4.svg",
"/clients/client-5.svg",
"/clients/client-6.svg",
"/clients/client-7.svg",
];

return ( <section className="py-32 bg-[#fafafa] overflow-hidden"> <div className="max-w-7xl mx-auto px-6">

```
    <p className="text-[#B80000] uppercase tracking-[0.25em] text-sm mb-4">
      Trusted By
    </p>

    <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
      Brands We've Worked With
    </h2>

    <p className="mt-6 text-lg text-gray-600 max-w-2xl">
      Collaborating with ambitious brands across FMCG, retail,
      hospitality and lifestyle industries.
    </p>

  </div>

  {/* Logo Marquee */}
  <div className="relative mt-20 overflow-hidden">

    {/* Fade Left */}
    <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#fafafa] to-transparent" />

    {/* Fade Right */}
    <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#fafafa] to-transparent" />

    <div className="marquee">

      {[...clients, ...clients].map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center shrink-0 w-[260px] h-[120px]"
        >
          <div className="relative w-[180px] h-[60px]">

            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              fill
              className="object-contain transition duration-300 hover:scale-105"
            />

          </div>
        </div>
      ))}

    </div>

  </div>

</section>
);
}
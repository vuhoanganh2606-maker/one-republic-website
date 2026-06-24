"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Brand Identity",
      desc: "Distinctive visual systems and identities.",
    },
    {
      number: "02",
      title: "Packaging Design",
      desc: "Packaging that stands out on the shelf.",
    },
    {
      number: "03",
      title: "Illustration",
      desc: "Custom illustrations with character and purpose.",
    },
    {
      number: "04",
      title: "Creative Direction",
      desc: "Creative oversight across campaigns and touchpoints.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-32 px-6 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[40%_60%] gap-24">

          {/* Left */}

          <div className="lg:sticky lg:top-32 h-fit">
            <p className="text-[#B80000] uppercase tracking-[0.2em] text-sm mb-4">
              Services
            </p>

            <h2 className="text-5xl font-bold leading-tight text-black mb-8">
              We create
              <br />
              meaningful
              <br />
              brand experiences.
            </h2>

            <p className="text-gray-600 text-lg max-w-md">
              From strategy and identity to packaging and illustration,
              we help brands become memorable.
            </p>
          </div>

          {/* Right */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={item}
                className="group py-10 cursor-pointer"
              >
                <div className="flex gap-6">

                  <span className="text-sm text-gray-400 mt-2 w-8 transition-colors duration-300 group-hover:text-[#B80000]">
                    {service.number}
                  </span>

                  <div className="flex-1">

                    <h3 className="text-2xl md:text-3xl font-semibold text-black transition-all duration-300 group-hover:translate-x-2">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 mt-3 max-w-md">
                      {service.desc}
                    </p>

                    <div className="mt-8 h-px bg-gray-200 overflow-hidden">
                      <div className="h-full w-0 bg-[#B80000] transition-all duration-500 group-hover:w-full" />
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
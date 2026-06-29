export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "Understanding your business, audience and market opportunities.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Defining positioning, messaging and creative direction.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Crafting brand identities, packaging and illustrations that stand out.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Preparing assets, production support and rollout guidelines.",
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-red-600 uppercase tracking-[0.2em] text-sm mb-4">
          Our Process
        </p>

        <h2 className="text-5xl font-bold text-black mb-16">
          How We Build Brands
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-gray-200 rounded-3xl p-10 hover:border-red-500 transition-all duration-300"
            >
              <p className="text-red-600 text-sm font-semibold mb-6">
                {step.number}
              </p>

              <h3 className="text-3xl font-bold text-black mb-4">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
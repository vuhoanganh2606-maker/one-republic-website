export default function About() {
  return (
    <section className="bg-white py-32" id="about">

      <div className="max-w-7xl mx-auto px-8">

        <p className="text-red-600 uppercase tracking-[0.2em] text-sm mb-4">
          About One Republic
        </p>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
        <div>
        <h2 className="text-6xl md:text-7xl font-bold leading-[0.95]">
            <span className="text-black">
            Branding.
            </span>
            <br />

            <span className="text-black">
            Packaging.
            </span>
            <br />

            <span className="text-black">
            Illustration.
            </span>
            <br />

            <span className="text-red-600">
            Built to be remembered.
            </span>
        </h2>
        </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with ambitious businesses to build meaningful
              brand experiences that connect with people and stand out
              in competitive markets.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              From strategic positioning and visual identity systems
              to premium packaging and illustration, we combine
              creativity and clarity to help brands grow.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">

              <div>
                <h3 className="text-4xl font-bold text-black">100+</h3>
                <p className="text-gray-500 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">10+</h3>
                <p className="text-gray-500 mt-2">
                  Years
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-black">50+</h3>
                <p className="text-gray-500 mt-2">
                  Clients
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
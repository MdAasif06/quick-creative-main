import logo from "../assets/images/logo.png";

export default function HeroTop() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT */}
          <div>
            <h1 className="gradient-text">
              UNLEASH YOUR CREATIVE IDEA.
            </h1>

            <p className="mt-6 max-w-md text-black text-base font-medium sm:text-lg">
              Our efficient and swift design and <br />
              development processes guarantee <br />
              high-quality results.
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full right-0" />

            <img
              src={logo}
              alt="Hero Illustration"
              className="relative z-10 w-64 sm:w-80 lg:w-[496px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

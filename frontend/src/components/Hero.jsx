
import HeroTop from "./HeroTop";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
         <HeroTop/>
      {/* QUICK CREATIVE SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-4 bg-white py-10 mt-50">
        <h1 className="head text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-green-700 leading-tight">
          Quick Creative Studio <br /> Empowers Your Vision
        </h1>

        <p className="font-semibold mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-3xl">
          Boost your business with our tailored solutions. We optimise <br />
          operations, enhance your competitive edge and fuel sustainable <br />
          growth. Partner with Quick Creative to strengthen your market <br />
          presence and expand globally.
        </p>

        <h2 className="font-semibold text-3xl mt-20 tracking-wide [word-spacing:2px]">
          Quick Creative Presenting our superpowers
        </h2>

        <p className="font-semibold text-[13px] mt-2 text-gray-700">
          Using the term ‘services’ feels a bit old-fashioned, doesn’t it?
        </p>
      </section>
    </>
  );
}

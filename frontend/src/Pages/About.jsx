import CTASection from "../components/CTASection";

const About = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold">
          We Are a <span className="text-green-600">Digital Agency</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          We help businesses grow by building clean, modern, and scalable
          digital solutions.
        </p>
      </section>

      {/* ABOUT INFO */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">
            Who We Are
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a team of developers and designers focused on building
            high-quality web products. Our approach is simple: understand
            the problem, design clean solutions, and deliver on time.
          </p>
        </div>

        <div className="rounded-2xl bg-green-50 p-8">
          <h3 className="text-xl font-semibold text-green-700">
            Our Approach
          </h3>
          <p className="mt-3 text-gray-600">
            We believe in simple design, clean code, and clear communication.
            Our solutions are easy to use and easy to scale.
          </p>
        </div>
      </section>


      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-20 bg-green-50 rounded-3xl">
        <h2 className="text-3xl font-semibold text-center">
          Why Choose Us
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 text-center">
          <Value text="Clean & Simple Design" />
          <Value text="Reliable & On-Time Delivery" />
           <Value text="Clear and Honest Communication" />
        </div>
      </section>

      <CTASection/>

    </div>
  );
};

const Card = ({ title, text }) => {
  return (
    <div className="rounded-2xl border p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-green-700">
        {title}
      </h3>
      <p className="mt-3 text-gray-600">
        {text}
      </p>
    </div>
  );
};

const Value = ({ text }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="font-medium text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default About;

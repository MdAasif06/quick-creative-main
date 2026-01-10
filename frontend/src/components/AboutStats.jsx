import Counter from "../Pages/Counter";

const AboutStats = () => {
  return (
    <div className="w-full bg-white py-20">
      
      {/* CONTENT CONTAINER (CENTER) */}
      <div className="mx-auto max-w-6xl px-6">

        {/* HEADING */}
        <h1 className="text-4xl font-bold text-center">
          <span className="text-yellow-500">Your Partner</span>{" "}
          <span className="text-black">in Innovation</span>
          <br />
          <span className="text-black">and Excellence</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We combine innovation and expertise to deliver powerful digital
          solutions for growing businesses.
        </p>

        {/* COUNTER BOXES */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 place-items-center">
          
          <StatCard title="Finished Project" value={50} />
          <StatCard title="Happy Clients" value={40} />
          <StatCard title="Skilled Experts" value={20} />
          <StatCard title="Countries" value={5} />

        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }) => {
  return (
    <div className="h-44 w-64 rounded-2xl border border-black bg-yellow-100 p-6 text-center">
      <h2 className="text-5xl font-bold text-black">
        <Counter end={value} />+
      </h2>
      <p className="mt-3 text-gray-700">{title}</p>
    </div>
  );
};

export default AboutStats;

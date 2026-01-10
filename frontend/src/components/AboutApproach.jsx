const AboutApproach = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-7xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-yellow-500">Empower Your</span>
              <br />
              <span className="text-yellow-500">Business</span>{" "}
              <span className="text-gray-700">with Our</span>
              <br />
              <span className="text-gray-700">Expert Approach</span>
            </h2>

            <p className="mt-6 max-w-md text-gray-600">
              Leverage innovation, flexibility, and leading-edge technology to
              fuel growth and future-proof your business.
            </p>

            <div className="mt-10 rounded-2xl border border-black bg-yellow-50 p-8">
              <div className="flex justify-between">
                <h4 className="font-semibold">
                  Agile & Scalable Strategies
                </h4>
                <span>↗</span>
              </div>

              <p className="mt-4 text-gray-700">
                We use smart research, innovation, and technology to build
                scalable solutions for long-term growth.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex justify-between border-b pb-4">
                <span>Tech-Driven Execution</span>
                <span>→</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span>Performance Monitoring & Innovation</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/business-growth.jpg"
              alt="Growth"
              className="h-[520px] max-w-md rounded-3xl object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutApproach;

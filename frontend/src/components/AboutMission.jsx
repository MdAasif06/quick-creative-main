const AboutMission = () => {
  return (
    <div className="w-full bg-white py-20">
      
      {/* MAIN CONTAINER */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="h-[420px] w-[320px] rounded-3xl bg-gray-900 flex items-center justify-center">
            {/* Replace this with your image */}
            <img
              src="/rocket.png"
              alt="Rocket"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-yellow-500">Empower Businesses</span>
            <br />
            <span className="text-black">
              to Thrive in Digital Age
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-gray-600">
            Your partner in business growth. From routine tasks to future
            planning, we take care of your tech so you can focus on success.
          </p>

          {/* VISION */}
          <div className="mt-8 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border">
              🌍
            </div>
            <div>
              <h4 className="font-semibold text-black">Our Vision</h4>
              <p className="mt-1 text-gray-600">
                We create smart digital solutions using customer focus and
                technical excellence to help businesses grow better.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className="mt-6 flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border">
              🎯
            </div>
            <div>
              <h4 className="font-semibold text-black">Our Mission</h4>
              <p className="mt-1 text-gray-600">
                Our mission is to help global entrepreneurs turn ideas into
                reality with quality service and on-time delivery.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutMission;

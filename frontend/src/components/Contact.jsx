import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const ContactSection = () => {
  return (
    <section className="w-full bg-white py-10 px-6 mb-10 mt-0">
      <div className="max-w-6xl mx-auto bg-[#0F3D2E] rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT CARD */}
          <div className="relative bg-[#2F7F67] rounded-2xl p-6 text-white overflow-hidden">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <p className="text-sm mt-1 opacity-90">
              let’s make magic happen!
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-center gap-3">
                <span><FiPhone/></span>
                <span>+91 8340648012</span>
              </div>

              <div className="flex items-center gap-3">
                <span><FiMail/></span>
                <span>demo@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <span><FiMapPin/></span>
                <span>
                  Tolichowki, Near Ruman <br />
                  Hyderabad 500008
                </span>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-green-500 rounded-full opacity-80"></div>
          </div>

          {/* RIGHT FORM */}
          <div className="md:col-span-2 text-white">
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Name" />
                <Input label="Company Name" />
                <Input label="Email" />
                <Input label="Mobile Number" />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <input
                  placeholder="how we can help"
                  className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mt-2 placeholder:text-white/60"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Input = ({ label }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mt-2"
    />
  </div>
);

export default ContactSection;

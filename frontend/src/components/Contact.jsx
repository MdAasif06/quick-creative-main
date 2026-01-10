import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://sheetdb.io/api/v1/m5nqghrooeq3e", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              name: form.name,
              company: form.company,
              email: form.email,
              mobile: form.mobile,
              message: form.message,
              date: new Date().toLocaleString(),
            },
          ],
        }),
      });

      alert("Message sent successfully!");

      setForm({
        name: "",
        company: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="w-full bg-white py-10 px-6 mb-10">
      <div className="max-w-6xl mx-auto bg-[#0F3D2E] rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT CARD */}
          <div className="relative bg-[#2F7F67] rounded-2xl p-6 text-white overflow-hidden">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <p className="text-sm mt-1 opacity-90">
              Let’s make magic happen!
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div className="flex items-center gap-3">
                <FiPhone />
                <span>+91 8340648012</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail />
                <span>demo@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin />
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
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <Input
                  label="Company Name"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  label="Mobile Number"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <input
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How we can help"
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

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-white/60 focus:outline-none py-2 mt-2"
    />
  </div>
);

export default ContactSection;

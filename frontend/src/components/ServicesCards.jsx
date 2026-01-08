import React from "react";
import Apex from '../assets/images/Apex.png';
import NkSons from '../assets/images/Nk-sons.png';
import Rental from '../assets/images/Rentel.png';
export default function ServicesCards() {
  return (
    <div className="w-full bg-[#123b2f] py-20">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* CARD 1 */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">
            Web Development
          </h3>

          <p className="text-sm mb-14 max-w-sm">
            Creating websites that are easy to use and keep your visitors
            happy and wanting to return.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg min-h-screen w-full">
            <img
              src={Apex}
              alt="Web development"
              className="object-cover"
            />
          </div>
        </div>

        {/* CARD 2 */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">
            E-Commerce Development
          </h3>

          <p className="text-sm mb-10 max-w-sm">
            Let’s make your online store a force to be reckoned with, one that
            really gets sales flowing and helps you grow your profits.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-h-lvh w-full">
            <img
              src={NkSons}
              alt="E-commerce"
              className="object-cover"
            />
          </div>
        </div>

        {/* CARD 3 */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">
            Web Application Development
          </h3>

          <p className="text-sm mb-10 max-w-sm">
            We create custom web applications that streamline your business
            processes and delight users.
          </p>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-h-lvh w-full">
            <img
              src={Rental}
              alt="Web application"
              className=" object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

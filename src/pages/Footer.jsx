import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20 px-4 py-12">
      <div className="max-full px-[8%] mx-auto text-[25px]">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 h-[80vh]">
          {/* Logo Section */}

          <div>
            <div className="flex justify-center items-center gap-2">
              <img className="w-10 mb-2" src="images/logo2.png" />
              <h1 className="text-orange-500 font-bold text-[40px]">Swiggy</h1>
            </div>
            <p className="text-sm text-gray-600">© 2025 Swiggy Limited</p>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="font-semibold mb-3">Company</h2>
            <ul className="space-y-6 text-gray-600 text-[18px]">
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
              <li>Minis</li>
              <li>Pyng</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-semibold mb-3">Contact us</h2>
            <ul className="space-y-6 text-gray-600 text-[18px]">
              <li>Help & Support</li>
              <li>Partner with Us</li>
              <li>Ride with Us</li>
            </ul>

            {/* Legal Section */}

            <div>
              <h2 className="font-semibold mt-20 mb-3">Legal</h2>
              <ul className="space-y-6 text-gray-600 text-[18px]">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* We deliver to Section */}
          <div>
            <h2 className="font-semibold mb-3">Available in</h2>
            <ul className="space-y-6 text-gray-600 text-[18px]">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Life at Swiggy</h2>
            <ul className="space-y-6 text-gray-600 text-[18px]">
              <li>Explore with Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <div className="mt-20"><h1>Social Links</h1></div>
            <div className="flex gap-4 mt-4 md:mb-0">
                
              <FaLinkedin className="cursor-pointer hover:text-blue-600 text-xl" />
              <FaInstagram className="cursor-pointer hover:text-pink-600 text-xl" />
              <FaFacebook className="cursor-pointer hover:text-blue-700 text-xl" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 text-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 mt-8 gap-2 text-[30px] flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-bold ">
              For better experience, download the Swiggy app now
            </p>
          </div>
          <div className="flex gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-18"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-18"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

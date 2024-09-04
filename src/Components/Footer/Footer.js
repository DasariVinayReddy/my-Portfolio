import img from "../../asstes/vinay1.png";
import Documentation from "../../asstes/documentation/DasariVinayReddy-doc.pdf";
export const Footer = () => {
  return (
    <div className="portfolio">
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <!--Grid--> */}
          <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <div className="flex ">
                <button className="relative  rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <img
                    className="h-[80px] w-[80px] rounded-full"
                    src={img}
                    alt=""
                  />
                </button>
                <span className="dvr">DASARI VINAY REDDY</span>
              </div>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0">
                {/* <!-- Add other social media links similarly --> */}
              </div>
            </div>
            {/* <!-- Add other footer content similarly --> */}
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg  font-medium mb-7 text-[#FF004F]">
                Quick links
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="#home" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="#about"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--End Col--> */}
            {/* <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg  font-medium mb-7 text-[#FF004F]">
                Products
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="!" className="text-gray-600 hover:text-gray-900">
                    Figma UI System
                  </a>
                </li>
                <li className="mb-6">
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Icons Assets
                  </a>
                </li>
                <li className="mb-6">
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Responsive Blocks
                  </a>
                </li>
                <li>
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Components Library
                  </a>
                </li>
              </ul>
            </div> */}
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg  font-medium mb-7 text-[#FF004F]">
                Resources
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="!" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </a>
                </li>
                <li className="mb-6">
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Quick Start
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href={Documentation}
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    User Guide
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--End Col--> */}
            <div className="lg:mx-auto text-center sm:text-left">
              <h4 className="text-lg  font-medium mb-7 text-[#FF004F]">
                Blogs
              </h4>
              <ul className="text-sm  transition-all duration-500">
                <li className="mb-6">
                  <a href="!" className="text-gray-600 hover:text-gray-900">
                    News
                  </a>
                </li>
                <li className="mb-6">
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Tips & Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    New Updates
                  </a>
                </li>
                <li>
                  <a href="!" className=" text-gray-600 hover:text-gray-900">
                    Events
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--Grid--> */}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-gray-500 ">
                ©<a href="!">DASARI VINAY REDDY</a> 2024, All rights reserved.
              </span>
              <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                <li>
                  <a href="!" className="text-sm ">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="!" className="text-sm text-gray-500">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="!" className="text-sm text-gray-500">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

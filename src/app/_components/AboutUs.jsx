import React from "react";
import { Blocks } from "lucide-react";
import { Gift, Laptop, Leaf } from "lucide-react";
import Image from 'next/image'
function AboutUs() {
  return (
    <div id="feature" className="bg-blue-100 px-5 py-24">
      <div className="container px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-5 lg:mb-0">
              <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
                Learn More About Us
              </h2>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl text-blue-600 mb-3">
                      <Blocks />
                    </div>
                    <div className="features-content">
                      <h4 className="text-gray-800 font-medium block mb-3">
                        Built with TailwindCSS
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl text-blue-600 mb-3">
                      <Gift />
                    </div>
                    <div className="features-content">
                      <h4 className="text-gray-800 font-medium block mb-3">
                        Free to Use
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl text-blue-600 mb-3">
                      <Laptop />
                    </div>
                    <div className="features-content">
                      <h4 className="text-gray-800 font-medium block mb-3">
                        Fully Responsive
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="icon text-4xl text-blue-600 mb-3">
                      <Leaf />
                    </div>
                    <div className="features-content">
                      <h4 className="text-gray-800 font-medium block mb-3">
                        Easy to Customize
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:block lg:w-1/2">
            <div className="mx-3 lg:mr-0 lg:ml-3">
              <Image src='/img-1.svg'  height={400} width={500} alt="about image"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

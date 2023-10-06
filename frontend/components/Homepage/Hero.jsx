import React from "react";


const Hero = () => {
  return (
    <div className="container mx-auto pt-5 ">
      <div className={` mt-10 px-16 py-10 rounded-3xl`}>
        <div className="flex justify-between mt-7 items-center">
          <div className="flex flex-col gap-10">
            <p className="text-5xl font-meduim">
              Welcome to Safe<span className="text-[#f06d63]">rent</span> ! Your
              adventure starts here
            </p>
            <p className="text-lg text-gray-500 ">
              <br /> Get ready to embark on your next adventure <br />
              with our extensive selection of rental cars, <br />
              vacation packages, boats, costumes, and equipment.
            </p>
            <a href="/signup" className="btn text-center  bg-[#f06d63] hover:bg-[#e97870] text-white rounded-full border-none  lg:w-1/4 py-3  capitalize">
              start for free
            </a>

            <div class="relative w-full">
              {/* <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-500 focus:border-500 block w-full pl-10 p-2.5 h-14  dark:bg-[#fff5f1] dark:border-[#c5bfbf] dark:placeholder-[#0f0f0f] dark:text-[#000000] "
                placeholder="Search cinema, cities, movies..."
                required
              /> */}
            </div>
          </div>
          <img
            src="/assets/homeimage.jpg"
            alt=""
            className="rounded-3xl w-1/2 h-6/12 pb-20 pl-3 "
          />

          {/* <video
                poster="/assets/videohomepage.jpg"
                className="h-128 w-60 rounded z-0 focus:shadow focus:outline-none"
                autoPlay
                muted
                loop
              >
                <source src="/assets/videohomepage.mp4" type="video/mp4" />
                
              </video> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

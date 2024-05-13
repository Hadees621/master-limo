import React from "react";

const page = ({ params }) => {
  return (
    <div class="w-full">
      <section class="mb-32 flex w-full flex-col items-center justify-center">
        <div class="relative -z-10 h-[300px] w-full overflow-hidden bg-[url('https://res.cloudinary.com/dyjirwjvp/image/upload/q_100/v1700916363/ourfleet/bannner/fleet-banner_eccy2x.webp')] bg-cover bg-[50%] bg-no-repeat blur-sm sm:h-[400px] 2xl:h-[600px]"></div>
        <p className="text-shadow font-LeagueSpartan absolute top-44 px-0 text-center text-[20px] font-[700] text-white md:px-24 md:text-[30px] 1024:text-[30px] lg:px-40 lg:text-[40px] xl:px-60 2xl:top-64 2xl:px-80 2xl:text-[70px]">
          Champagne, Jazz and Limousines in Temecula
        </p>

        <div className="mt-32 w-full max-w-[1100px] text-start text-white">
          <div className="my-10">
            <h1 className="font-LeagueSpartan  text-[24px] font-semibold">
              Champagne, Jazz and Limousines in Temecula
            </h1>
            <div className="mt-3 flex gap-8">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M256 128v144h96"
                  />
                </svg>
                <p>23 May 2017</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 3C6.5 3 2 6.58 2 11a7.22 7.22 0 0 0 2.75 5.5c0 .6-.42 2.17-2.75 4.5c2.37-.11 4.64-1 6.47-2.5c1.14.33 2.34.5 3.53.5c5.5 0 10-3.58 10-8s-4.5-8-10-8m0 14c-4.42 0-8-2.69-8-6s3.58-6 8-6s8 2.69 8 6s-3.58 6-8 6"
                  />
                </svg>
                <p>By masterlimo</p>
              </div>
            </div>
          </div>

          <div className="grid max-w-[800px] space-y-5">
            <p>
              Few can disagree that there is nothing classier than this
              combination: Champagne, Jazz and Limousines. Luckily, folks near
              Temecula Wine Country can experience all three during Thornton
              Winery’s Champagne Jazz Series. Thornton Winery located in
              Temecula and is nationally and critically acclaimed as one of the
              finest outdoor venues. From the Mediterranean-style fountain
              terrace, to the great view overlooking Temecula Wine Country,
              prepare to have a memorable and unique concert experience in
              luxury and style! Check out the line-up and schedule here.
            </p>
            <p>
              The Annual Champagne Jazz Series at Thornton Winery brings the
              finest artists to Temecula Valley during the summer months. If
              you’re looking for the perfect way to top off the night, then look
              no further than our Temecula Winery Limo Services. Masterpiece
              Limousines services Temecula and San Diego for wine tours, brewery
              tours and more. Make this night spectacular and book your
              limousine and buy your tickets now!
            </p>
          </div>

          <div className="my-10 flex gap-8 text-[#1EACC7]">
            <div className="flex hover:font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="rotate-180"
              >
                <path
                  fill="currentColor"
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a.997.997 0 0 1-.707.293Z"
                />
              </svg>
              <p className="cursor-pointer ">
                <a>GRADUATION LIMOUSINE SERVICES SAN DIEGO</a>
              </p>
            </div>
            <div className="flex hover:font-bold">
              <p className="cursor-pointer ">
                <a>GRADUATION LIMOUSINE SERVICES SAN DIEGO</a>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a.997.997 0 0 1-.707.293Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

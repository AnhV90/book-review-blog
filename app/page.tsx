import Image from "next/image";

export default function Home() {
  return (
    <header className="relative mx-10vw">
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
          <Image
            width={918}
            height={918}
            className="h-auto w-full object-contain max-h-75vh"
            alt="Illustration of Kody the Koala skiing surrounded by green leaves, a battery, two skies, a one-wheel, a solar panel, and a recycle logo."
            src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_918,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_skiing_flying_red"
            sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1279px) 50vw, (min-width: 1280px) 900px"
            crossOrigin="anonymous"
            style={{ opacity: 1, transform: "none" }}
          />
        </div>
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
                Helping people make the world a better place through quality
                software.
              </h2>
            </div>
            <div
              className="mt-14 flex flex-col space-y-4"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="mr-auto flex flex-col gap-4">
                <a
                  className="group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition"
                  href="/blog"
                >
                  <div className="focus-ring absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50 bg-inverse"></div>
                  <div className="relative flex h-full w-full items-center justify-center whitespace-nowrap text-inverse space-x-5 px-11 py-6">
                    Read the blog
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden pt-12 lg:block" style={{ opacity: 1 }}>
            <a
              className="text-primary inline-flex items-center text-left font-medium focus:outline-none cursor-pointer transition text-lg"
              href="/#intro"
            >
              <div className="relative inline-flex h-14 w-14 flex-none items-center justify-center p-1">
                <div className="absolute text-gray-200 dark:text-gray-600">
                  <svg width="60" height="60">
                    <circle
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      r="28"
                      cx="30"
                      cy="30"
                    ></circle>
                    <circle
                      className="text-primary"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      r="28"
                      cx="30"
                      cy="30"
                      transform-origin="30px 30px"
                      strokeDashoffset="175.92918860102841"
                    ></circle>
                  </svg>
                </div>
                <span style={{ transform: "none" }}>
                  <svg
                    className="transform rotate-0"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <span className="ml-8 text-xl font-medium">
                Learn more about me
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

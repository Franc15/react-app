const Hero = () => {
  return (
    <section class="text-gray-600 body-font mx-2">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Out of mind, out of sight
            <br class="hidden lg:inline-block" />
            but not out of reach.
          </h1>
          <p class="mb-8 leading-relaxed">
            Do you want to remember your first words when you were born? Do you
            want to show your kids their family tree? Memory.Inc got you
            covered. Our goal is to preserve your memories, no matter how small
            or big at an affordable price. Memories you can access wherever and
            whenever, and here is the best part, there is no limit to what you
            can store. <br />
            So why wait, join Memory.Inc now and have more headspace to create
            more memories!
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Get Started
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div class="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded w-4/5"
            alt="hero"
            src="https://www.pngitem.com/pimgs/b/267-2675114_earth-cartoon-png.png"
          />
          <div className="absolute md:w-48 top-20 right-4 rounded-md p-4 text-black bg-white shadow-lg">
            Hey, that's my picture on Mars😊😊
          </div>

          <div className="hidden md:block absolute md:w-48 bottom-0 left-0 m-10 rounded-md p-4 text-black bg-white shadow-lg">
            Bridget's birthday is coming up!🎂
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

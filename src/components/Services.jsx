import { Link } from "react-router-dom";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Our Services
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            We offer a wide range of services that gives the users the options
            to store their data in special locations around the universe.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <ServicesItem
            title="Print your name on a monument"
            description="This service allow our users to get their lovely names out there, printed somewhere nice on the universe. Think of places like Mars, the moon or even on the sun"
          />
          <ServicesItem
            title="Play your recording in the sea"
            description="This service is for all the sea lovers who would love their sound to be heard by kings of the seas(sharks)."
          />
          <ServicesItem
            title="Video on the moon"
            description="This service gives the user the option to play your funniest video on the streets of Mars"
          />
        </div>
        <Link to="/pricing">
          <button class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Interested? Check the Packages
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Services;

import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section class="text-gray-600 body-font mx-2">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sorry, the page you are looking for is currently not available.
          </h1>
          <p class="mb-8 leading-relaxed">
            We are working hard to bring you the best experience possible
          </p>
          <div class="flex justify-center">
            <Link to="/">
              <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
        <div class="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded w-4/5"
            alt="hero"
            src="https://down-yuantu.pngtree.com/58pic/32/49/56/40458PICI6fkEa82f7cvd_PIC2018.png?e=1652594452&st=YjU1MGVhOWUxNGJhMDAwMzEzNzdiYjZjODM5M2FmZGE&n=%E2%80%94Pngtree%E2%80%94404+cartoon+cute+hamster+error_4043582.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Page404;

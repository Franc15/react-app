const Testimonials = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          Testimonials
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          What our users say about us.
        </p>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.pinimg.com/originals/60/54/64/605464adbbbd633f9dd4aea6e3e069fc.png"
              />
              <p class="leading-relaxed">
                I have always been the most sentimental in my family that it is
                hard for me to let go of my worn-out socks from a family
                vacation, I want to leave a mark, I always say. BeMemory has
                helped me by offering wonderful packages where I can store audio
                and images on cool spaces such as the Moon. My legacy is set and
                that puts me at ease.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                BLESSING GATSI
              </h2>
              <p class="text-gray-500">Housewife</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.pinimg.com/originals/60/54/64/605464adbbbd633f9dd4aea6e3e069fc.png"
              />
              <p class="leading-relaxed">
                It is a dream come true to be able to leave an indelible mark
                for my future generations to see. I am satisfied to know that I
                can share my knowledge with them. I can write my own story and
                none in a history book can distort or hide the truth.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                MITCHELL KIKULWE
              </h2>
              <p class="text-gray-500">Data Analyst</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://i.pinimg.com/originals/60/54/64/605464adbbbd633f9dd4aea6e3e069fc.png"
              />
              <p class="leading-relaxed">
                I was so happy and too excited to send my face to space. A
                lifetime goal!
              </p>
              <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                LAURA MONROE
              </h2>
              <p class="text-gray-500">Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

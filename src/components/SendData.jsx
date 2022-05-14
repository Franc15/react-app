import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SendData = (props) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/send");
    }
  }, []);

  function handleClick() {
    console.log(name, location, message);
    let data = {
      client: 1,
      location: location,
      text: message,
      medium: "sticky notes",
    };
    fetch("https://django-cloudrun-lsmeeds47a-uc.a.run.app/api/textpackage/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          console.log(res);
          localStorage.setItem("token", res.token);
          navigate("/checkout");
        } else {
          setError(res.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <section class=" body-font relative">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-2">
        Our Services
      </h1>
      <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmljZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Enter the text message
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Write a message/quote that you want to be displayed with your name
            in Mars
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Location
            </label>
            <select
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="1">Mars</option>
              <option value="2">Earth</option>
              <option value="3">Venus</option>
            </select>
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleClick}
            class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Proceed to Checkout
          </button>
          <p class="text-xs text-gray-500 mt-3">
            You are just a few clicks away from sending your message to Mars.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SendData;

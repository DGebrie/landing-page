import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o3zw70t",
        "template_ihq4uwm",
        form.current,
        "axk7_XhwZYNFT3v8_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div class="grid min-h-screen place-items-center bg-zinc-300" id="contact">
      <div class="w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 class="text-xl font-semibold">Let's connect</h1>
        <form class="mt-6" ref={form} onSubmit={sendEmail}>
          <div class="flex justify-between gap-3">
            <span class="w-1/2">
              <label
                for="firstname"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <input
                id="firstname"
                type="text"
                name="first_name"
                placeholder="John"
                autocomplete="given-name"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span class="w-1/2">
              <label
                for="lastname"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <input
                id="lastname"
                type="text"
                name="last_name"
                placeholder="Doe"
                autocomplete="family-name"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            for="email"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="john.doe@company.com"
            autocomplete="email"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="message"
          />
          <textarea
            class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Send
          </button>
        </form>
        <ul className="flex place-content-center mx-6  ">
          <li>
            <a
              href="mailto:dj.mebratu@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-20 h-20" />
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/dgebrie"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} className="w-20 h-20" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dgebrie"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="w-20 h-20"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

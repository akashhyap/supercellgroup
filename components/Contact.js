"use client";

import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Contact = ({ blok }) => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }
  const inlineStyle = {
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
  };

  return (
    <div {...storyblokEditable(blok)}>
      <div>
        {blok?.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`relative z-10 px-4 sm:px-6 container ${blok.maxWidth} ${
          blok.maxWidth ? "mx-auto" : ""
        }`}
        style={inlineStyle}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Type your message"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-black focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-black py-3 px-8 text-base font-semibold text-white outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;

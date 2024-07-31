import { useForm } from "react-hook-form";
import React from "react";
import emailjs from "@emailjs/browser";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        alert("Form submitted successfully!");
        reset();
      } else {
        console.error("EmailJS response error:", result);
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-slate-700"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First name"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-700 ${
            errors.firstName
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
          {...register("firstName", {
            required: "First name is required",
            maxLength: { value: 80, message: "First name is too long" },
          })}
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last name"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-700 ${
            errors.lastName
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
          {...register("lastName", {
            required: "Last name is required",
            maxLength: { value: 100, message: "Last name is too long" },
          })}
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-700 ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="mobileNumber"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Mobile Number
        </label>
        <input
          id="mobileNumber"
          type="tel"
          pattern="[0-9]*"
          placeholder="Mobile number"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-700 ${
            errors.mobileNumber
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
          {...register("mobileNumber", {
            required: "Mobile number is required",
            minLength: { value: 6, message: "Mobile number is too short" },
            maxLength: { value: 12, message: "Mobile number is too long" },
          })}
        />
        {errors.mobileNumber && (
          <p className="mt-1 text-sm text-red-500">
            {errors.mobileNumber.message}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-700 ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-500"
          }`}
          rows="4"
          {...register("message", { required: "Message is required" })}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

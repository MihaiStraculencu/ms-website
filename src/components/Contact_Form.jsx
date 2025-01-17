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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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
      className="max-w-md mx-auto mt-8 p-6 bg-slate-100/10 rounded-lg shadow-lg  border border-slate-100/10 "
    >
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-slate-200"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="First name"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-800 font-form ${
            errors.firstName
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-300/50"
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
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          placeholder="Last name"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-800 ${
            errors.lastName
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-300/50"
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
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-800 ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-300/50"
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
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Mobile Number
        </label>
        <input
          id="mobileNumber"
          type="tel"
          pattern="[0-9]*"
          placeholder="Mobile number"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-800 ${
            errors.mobileNumber
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-300/50"
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
          className="block mb-2 text-sm font-medium text-gray-100"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-slate-800 ${
            errors.message
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-indigo-300/50"
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
        className="w-full px-4 py-2 text-slate-900 bg-white rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50 hover:transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;

import { CONTACT } from "../constants";
import React from "react";
import { motion } from "framer-motion";
import Contact_Form from "./Contact_Form";

const Contact = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-20"
    >
      <h1 className="my-10 text-center text-4xl font-extrabold text-gray-300">
        Get in Touch
      </h1>
      <Contact_Form />
      <div className="text-center space-y-6 mt-5">
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-lg text-blue-300 hover:text-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          {CONTACT.email}
        </a>
        <p className="text-xl text-gray-300">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="hover:text-blue-600 transition duration-300 ease-in-out"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;

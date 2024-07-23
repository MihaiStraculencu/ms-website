import { CONTACT } from "../constants";
import { motion } from "framer-motion";

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
      <div className="text-center space-y-6">
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

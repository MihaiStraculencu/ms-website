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
      <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.email}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
      </div>
    </motion.div>
  );
};

export default Contact;

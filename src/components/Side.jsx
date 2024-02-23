import Image from "./image";
import Github from "../assets/svg/github.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Twitter from "../assets/svg/twitter.svg";
import { motion } from "framer-motion";

export default function Side() {
  const animation = {
    x: 10,
    transition: { ease: "easeOut", duration: 1 },
  };
  return (
    <div className="">
      <motion.div whileHover={animation} className="p-2 mt-2 mb-8">
        <a href="https://github.com/Kashyap1ankit">
          <Image link={Github} />
        </a>
      </motion.div>
      <motion.div whileHover={animation} className="p-2 mt-2 mb-8">
        <a href="https://www.linkedin.com/in/ankit-kashyap-coder/">
          <Image link={Linkedin} />
        </a>
      </motion.div>
      <motion.div whileHover={animation} className="p-2 mt-2 mb-8">
        <a href="https://twitter.com/Ankitka38153827 ">
          <Image link={Twitter} />
        </a>
      </motion.div>
    </div>
  );
}
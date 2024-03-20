import Github from "../assets/svg/github.svg";
import Link from "../assets/svg/link.svg";
import Image from "./image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Card({ techstack, redirect, slides }) {
  const [current, setCurr] = useState(0);
  const [flip, setFlip] = useState(false);

  let styles = {
    width: "100%",
  };

  function flipCard() {
    setFlip(!flip);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <motion.div
      whileInView={{
        scale: [0.5, 1],
      }}
      className="xsm:w-full  lg:w-full shadow-lg"
    >
      <div>
        {/* front part  */}
        <div onClick={flipCard}>
          <img
            className={`rounded-xl ${flip ? "opacity-25" : ""}`}
            style={styles}
            src={slides[current]}
            alt=""
          />
        </div>

        {/* back part  */}

        <div
          className={`${
            flip
              ? "xsm:relative xsm:bottom-12 sm:bottom-24 sm:left-12 lg:relative lg:bottom-32 lg:left-12 flex flex-start mx-auto w-1/3"
              : "hidden"
          }`}
        >
          <motion.div
            className="sm:size-8 xsm:size-6  mr-6 cursor-pointer"
            whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
            whileTap={{ scale: 3 }}
          >
            <a>
              <Image link={Github} redirect={redirect[0]} />
            </a>
          </motion.div>
          <motion.div
            className="sm:size-8 xsm:size-6 cursor-pointer"
            whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.8 }}
          >
            <Image link={Link} redirect={redirect[1]} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

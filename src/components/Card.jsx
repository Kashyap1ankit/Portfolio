import SimpleImageSlider from "react-simple-image-slider";
import Github from "../assets/svg/github.svg";
import Link from "../assets/svg/link.svg";
import Image from "./image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Card({ title, para, techstack, redirect, slides }) {
  const [current, setCurr] = useState(0);

  let styles = {
    width: "100%",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);
  return (
    <div className="lg:w-1/3 sm:w-full shadow-lg">
      <div>
        <img style={styles} src={slides[current]} alt="" />
      </div>

      <div className="lg:px-6 sm:p-2 lg:py-4 sm:py-2">
        <div className="font-bold lg:text-2xl xsm:text-xl mt-4 mb-8">
          {title}
        </div>
        <p className="text-gray-700 sm:w-12/12 xsm:text-sm text-base">{para}</p>
        <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 lg:gap-4 sm:gap-4  xsm:grid xsm:grid-cols-2 xsm:gap-4 xsm:px-8 mt-7">
          {techstack.map((e) => {
            return (
              <p className="border border-gray-200 text-custom border-dashed rounded-full px-3 py-1 text-sm font-semibold ">
                {e}
              </p>
            );
          })}
        </div>
      </div>

      <div className="flex flex-around mx-56 sm:mx-36 xsm:mx-28 mt-4 mb-5 w-full">
        <motion.div
          className="sm:size-8 xsm:size-6 xsm:mb-4 mx-12 cursor-pointer"
          whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
          whileTap={{ scale: 3 }}
        >
          <a>
            <Image link={Github} redirect={redirect[0]} />
          </a>
        </motion.div>
        <motion.div
          className="sm:size-8 xsm:size-6 xsm:mb-4 cursor-pointer"
          whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.8 }}
        >
          <Image link={Link} redirect={redirect[1]} />
        </motion.div>
      </div>
    </div>
  );
}

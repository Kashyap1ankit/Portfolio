import SimpleImageSlider from "react-simple-image-slider";
import Github from "../assets/svg/github.svg";
import Link from "../assets/svg/link.svg";
import Image from "./image";
import { motion } from "framer-motion";
export default function Card({ title, para, images, techstack, redirect }) {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg ">
      <SimpleImageSlider
        width={502}
        height={300}
        images={images}
        showBullets={true}
        autoPlay={true}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-8">{title}</div>

        <p className="text-gray-700 text-base">{para}</p>

        <div className="grid grid-cols-4 gap-4 mt-7">
          {techstack.map((e) => {
            return (
              <p className="border border-gray-200 text-custom border-dashed rounded-full px-3 py-1 text-sm font-semibold ">
                {e}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex flex-around mx-80 mt-4 mb-5 w-full">
        <motion.div
          className="size-8 mx-12 cursor-pointer"
          whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
          whileTap={{ scale: 3 }}
        >
          <a>
            <Image link={Github} redirect={redirect[0]} />
          </a>
        </motion.div>

        <motion.div
          className="size-8 cursor-pointer"
          whileHover={{ rotate: 30, transition: { duration: 0.5 } }}
          whileTap={{ scale: 0.8 }}
        >
          <Image link={Link} redirect={redirect[1]} />
        </motion.div>
      </div>
    </div>
  );
}

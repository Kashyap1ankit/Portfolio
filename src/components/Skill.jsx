import Button from "./ContactBtn";
import Heading from "./Heading";
import { motion } from "framer-motion";

export default function Skill({ skills }) {
  return (
    <div className="mb-12">
      <div className="lg:text-5xl sm:text-4xl mb-32 sm:mb-24 font-Kanit text-center">
        <Heading title={"SKILLS"} />
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-3 gap-5 lg:w-6/12 sm:w-11/12 mx-auto">
        {skills.map((e) => {
          return (
            <motion.div
              whileInView={{ y: -60 }}
              className="shadow-lg text-center py-2 font-Anta rounded-lg"
            >
              <Button text={e} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

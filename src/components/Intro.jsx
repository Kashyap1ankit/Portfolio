import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Typed from "typed.js";
import Button from "./ContactBtn";
import resume from "../assets/files/Update resume.pdf";
import Image from "./image";
import Download from "../assets/svg/download.svg";
import Contact from "../assets/svg/contact.svg";
import Ankit from "../assets/images/ankit.png";

export default function Intro() {
  const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend", "And", "Backend Developer"],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:flex lg:justify-between flex-row-reverse sm:block ">
      <div className="lg:size-80 sm:size-28 xsm:size-36 lg:mr-32 sm:mx-auto xsm:mx-auto lg:px-8 lg:m-auto sm:shadow-lg place-items-center lg:rounded-full sm:rounded-full xsm:rounded-full">
        <img src={Ankit} alt="" className="mt-24" />
      </div>

      <div className="sm:mt-12 xsm:mt-12 sm:ml-0 lg:w-full ">
        <div className="lg:text-4xl sm:text-2xl xsm:text-xl font-Verdana text-gray-600 lg:leading-snug sm:leading-normal xsm:leading-normal">
          <Heading title={"Hello !"} />
        </div>
        <div className="lg:text-6xl sm:text-3xl xsm:text-2xl font-Verdana font-extraboldb lg:leading-snug sm:leading-normal xsm:leading-normal">
          <Heading title={"I'm Ankit Kashyap, a"} />
        </div>

        <div className="lg:text-6xl sm:text-3xl xsm:text-2xl font-Verdana font-extraboldb lg:leading-snug sm:leading-normal xsm:leading-normal text-custom">
          <span ref={el}></span>
        </div>

        <div className="lg:flex lg:mt-8 lg:flex-wrap xsm:flex xsm:mt-8">
          <a href={resume} download="ankit-resume">
            <div className="bg-download p-2 rounded-md text-white lg:mr-8 xsm:mr-4 lg:min-w-40 sm:min-w-28  xsm:min-w-32 text-center flex justify-around lg:text-xl sm:text-sm">
              <Button text={"Resume"} />
              <div className="size-5 mt-1 invert-100">
                <Image link={Download} />
              </div>
            </div>
          </a>
          <a href="mailto:kashyap25ankit@gmail.com">
            <div className=" bg-connect p-2 rounded-md text-white lg:min-w-40 sm:min-w-28 xsm:min-w-32 lg:text-xl sm:text-sm text-center flex justify-around">
              <Button text={"Connect me"} />

              <div className="size-5 mt-1 invert-100">
                <Image link={Contact} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

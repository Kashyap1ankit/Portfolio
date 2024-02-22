import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Typed from "typed.js";
import Button from "./ContactBtn";
import resume from "../assets/files/Update resume.pdf";
import Image from "./image";
import Download from "../assets/svg/download.svg";
import Contact from "../assets/svg/contact.svg";

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
    <div className="flex justify-between flex-wrap mt-56">
      <div>
        <div className="text-2xl font-Verdana text-gray-600 leading-snug">
          <Heading title={"Hello !"} />
        </div>
        <div className="text-5xl font-Verdana font-extraboldb leading-snug">
          <Heading title={"I'm Ankit Kashyap, a"} />
        </div>

        <div className="text-5xl font-Verdana font-extraboldb leading-snug text-custom">
          <span ref={el}></span>
        </div>

        <div className="flex mt-8 flex-wrap">
          <div className="bg-download p-2 rounded-md text-white mr-8 min-w-36 text-center flex justify-around">
            <a href={resume} download="ankit-resume">
              <Button text={"Resume"} />
            </a>
            <div className="size-5 mt-1 invert-100">
              <Image link={Download} />
            </div>
          </div>
          <div className=" bg-connect p-2 rounded-md text-white fill-black-500 min-w-36 text-center flex justify-around">
            <Button text={"Connect me"} />

            <div className="size-5 mt-1 invert-100">
              <Image link={Contact} />
            </div>
          </div>
        </div>
      </div>

      <div className="size-80 mr-52 mt-[-35px] rounded-full p-4 overflow-hidden shadow-lg">
        <img
          src="https://avatars.githubusercontent.com/u/121277178?s=400&u=97cd87a4820d4c38cabc115e658be0407bc1801d&v=4"
          alt=""
        />
      </div>
    </div>
  );
}

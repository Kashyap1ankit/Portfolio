import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Image from "./image";
import Typed from "typed.js";
import Button from "./ContactBtn";
import resume from "../assets/files/Update resume.pdf";
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
    <div className="flex justify-between">
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

        <div className="flex justify-start mt-8">
          <div className="bg-download p-2 rounded-md text-white mr-8 min-w-36 text-center">
            <a href={resume} download="ankit-resume">
              <Button text={"Resume"} />
            </a>
          </div>
          <div className=" bg-connect p-2 rounded-md text-white fill-black-500 min-w-36 text-center">
            <Button text={"Connect me"} />
          </div>
        </div>
      </div>

      <div className="size-80 mr-52 mt-[-35px] rounded-full p-4 overflow-hidden shadow-lg">
        <Image
          link={
            "https://avatars.githubusercontent.com/u/121277178?s=400&u=97cd87a4820d4c38cabc115e658be0407bc1801d&v=4"
          }
        />
      </div>
    </div>
  );
}

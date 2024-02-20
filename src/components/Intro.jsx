import { useEffect, useRef } from "react";
import Heading from "./Heading";
import Image from "./image";
import Typed from "typed.js";
import Button from "./ContactBtn";
import resume from "../assets/files/Update resume.pdf";
import Lottie from "lottie-react";
import bg from "../bg.json";

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

        <div className="flex justify-start mt-8 flex-wrap">
          <div className="bg-download p-2 rounded-md text-white mr-8 min-w-36 text-center flex justify-around">
            <a href={resume} download="ankit-resume">
              <Button text={"Resume"} />
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
          <div className=" bg-connect p-2 rounded-md text-white fill-black-500 min-w-36 text-center flex justify-around">
            <Button text={"Connect me"} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="size-80 mr-52 mt-[-35px] rounded-full p-4 overflow-hidden shadow-lg">
        <Image
          link={
            "https://avatars.githubusercontent.com/u/121277178?s=400&u=97cd87a4820d4c38cabc115e658be0407bc1801d&v=4"
          }
        />
        {/* <div className="size-96 mr-">
          <Lottie animationData={bg} loop={true} />
        </div> */}
      </div>
    </div>
  );
}

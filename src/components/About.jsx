import Heading from "./Heading";
import Lottie from "lottie-react";
import animate from "../animate.json";

export default function About() {
  return (
    <div>
      <div className="xsm:text-4xl xsm:mb-16 lg:text-5xl lg:mb-20  font-Kanit">
        <Heading title={"ABOUT"} />
      </div>
      <div className="xl:flex xsm:block xl:justify-evenly">
        <div className="lg:max-w-96 sm:max-w-56  xsm:max-w-56 sm:mx-auto">
          <Lottie animationData={animate} loop={true} />
        </div>
        <div className="xsm:text-md xsm:leading-normal xsm:mt-8 xsm:ml-0 xsm:px-0 xsm:w-full antialiased lg:text-lg sm:text-lg  lg:mr-0 tracking-wider lg:leading-surge xl:mt-20 lg:mt-12  xl:w-3/6 font-Verdana opacity-65 ">
          <Heading
            title={
              "Hello, I'm Ankit, a FullStack Developer with a passion for building responsive and beautiful websites. I will complete my graduation in 2025 in BCA (Bachelor's in Computer Application)"
            }
          />

          <br />
          <Heading
            title={
              "Let's connect and explore how we can collaborate on any project.Feel free to browse through my portfolio to see some of my latest work, and don't hesitate to reach out for any inquiries or opportunities. I look forward to connecting with you!"
            }
          />
        </div>
      </div>
    </div>
  );
}

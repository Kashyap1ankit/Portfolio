import Heading from "./Heading";
import Lottie from "lottie-react";
import animate from "../animate.json";

export default function About() {
  return (
    <div>
      <div className="lg:text-5xl sm:text-4xl lg:mb-20 sm:mb-16 font-Kanit">
        <Heading title={"ABOUT"} />
      </div>
      <div className="lg:flex sm:block lg:justify-evenly">
        <div className="lg:max-w-96 sm:max-w-56 sm:mx-auto">
          <Lottie animationData={animate} loop={true} />
        </div>
        <div className="lg:text-lg sm:text-lg sm:px-2 antialiased lg:mr-0 sm:ml-0 tracking-wider lg:leading-surge lg:mt-4 sm:mt-8 font-Verdana lg:w-3/6 sm:w-full opacity-65">
          <Heading
            title={
              "Hello, I'm Ankit, a FullStack Developer with a passion for building responsive and beautiful websites. I will complete my graduation in 2025 in BCA (Bachelor's in Computer Application)"
            }
          />
          <br />
          <Heading
            title={
              "I enjoy building websites that are both beautiful and user-friendly.I believe in simplicity and minimalism and enjoy bringing that mood into every project I touch."
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

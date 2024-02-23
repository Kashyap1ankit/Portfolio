import Heading from "./Heading";
import Lottie from "lottie-react";
import animate from "../animate.json";

export default function About() {
  return (
    <div>
      <div className="text-5xl mb-20 font-Kanit">
        <Heading title={"ABOUT"} />
      </div>
      <div className="flex justify-evenly">
        <div className="max-w-96">
          <Lottie animationData={animate} loop={true} />
        </div>
        <div className="text-lg antialiased ml-14 tracking-wider leading-surge mt-4 font-Verdana w-3/6 opacity-65">
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

import Card from "./Card";
import Heading from "./Heading";
import airbnb1 from "../assets/images/airbnb/airbnb-1.png";
import airbnb2 from "../assets/images/airbnb/airbnb-2.png";
import airbnb3 from "../assets/images/airbnb/airbnb-3.png";
import airbnb4 from "../assets/images/airbnb/airbnb-4.png";
import airbnb5 from "../assets/images/airbnb/airbnb-5.png";
import airbnb6 from "../assets/images/airbnb/airbnb-6.png";
import quiz1 from "../assets/images/quiz/quiz-1.png";
import quiz2 from "../assets/images/quiz/quiz-2.png";
import quiz3 from "../assets/images/quiz/quiz-3.png";

export default function Project() {
  return (
    <div>
      <div className="text-5xl mb-20 font-Kanit">
        <Heading title={"PROJECTS"} />
      </div>

      <div className="flex flex-wrap justify-between">
        <Card
          title={"Airbnb Clone"}
          para=" 🚀Explore a vibrant Airbnb clone 🌍This platform lets users register,list homes and
          discover diverse listings. Real-time authorization and authentication
          ensure a secure environment 🔒. It's a dynamic space to
          filter and search for accommodations by category or name 🏨. Dive into
          a world of seamless travel experiences with our Airbnb-inspired
          platform! "
          images={[
            {
              url: airbnb1,
            },
            {
              url: airbnb2,
            },
            {
              url: airbnb3,
            },
            {
              url: airbnb4,
            },
            {
              url: airbnb5,
            },
            {
              url: airbnb6,
            },
          ]}
          techstack={[
            "Html",
            "Css",
            "Javascript",
            "Express",
            "Nodejs",
            "MongoDb",
            "Ejs",
            "Restful Api",
          ]}
        />

        <Card
          title={"Quiz Website"}
          para={
            "🚀Introducing my latest Frontend project: 🌐 Real-time Quiz Website! 🧠 Answer 10 engaging questions, choose from 14 diverse categories, and your high score will be saved, even if you take a break and return days later! 📈🕒Built with the magic of CSS and the power of JavaScript."
          }
          images={[
            {
              url: quiz1,
            },
            {
              url: quiz2,
            },
            {
              url: quiz3,
            },
          ]}
          techstack={["Html", "css", "Javascript", "Api"]}
        />
      </div>
    </div>
  );
}

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
import Button from "./ContactBtn";

export default function Project() {
  return (
    <div>
      <div className="text-5xl mb-20 font-Kanit">
        <Heading title={"PROJECTS"} />
      </div>

      <div className="flex flex-wrap justify-between ">
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
            "#Html",
            "#Css",
            "#Javascript",
            "#Express",
            "#Nodejs",
            "#MongoDb",
            "#Ejs",
            "#Restful Api",
          ]}
          redirect={[
            "https://github.com/Kashyap1ankit/Airbnb",
            "https://www.linkedin.com/posts/ankit-kashyap-coder_explore-a-vibrant-airbnb-clone-crafted-activity-7138967850567864320-mrUs?utm_source=share&utm_medium=member_desktop",
          ]}
        />

        <Card
          title={"Quiz Website"}
          para={
            "🚀the Real-time Quiz Website, promises an engaging and dynamic experience for users. With the ability to answer 10 stimulating questions across 14 diverse categories, your platform offers a wide range of topics to explore. Not only does it provide an interactive quiz experience, but it also ensures that users can conveniently resume their progress even after taking a break, with their high scores securely saved. Promising an exciting journey of knowledge exploration and fun."
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
          techstack={["#Html", "#Css", "#Javascript", "#Api"]}
          redirect={[
            "https://github.com/Kashyap1ankit/QuizHub",
            "https://quiz-hub-game.netlify.app/",
          ]}
        />
      </div>

      <div className="mx-auto mt-16 bg-sky max-w-48 p-2 text-white rounded-md cursor-pointer hover:bg-skyLight">
        <Button text={"See More"} />
      </div>
    </div>
  );
}

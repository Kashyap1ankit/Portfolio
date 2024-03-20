import Card from "./Card";
import Heading from "./Heading";
import airbnb1 from "../assets/images/airbnb/airbnb-1.png";
import airbnb2 from "../assets/images/airbnb/airbnb-2.png";
import airbnb3 from "../assets/images/airbnb/airbnb-3.png";
import quiz1 from "../assets/images/quiz/quiz-1.png";
import quiz2 from "../assets/images/quiz/quiz-2.png";
import quiz3 from "../assets/images/quiz/quiz-3.png";

let airSlides = [airbnb1, airbnb2, airbnb3];
let quizSlides = [quiz1, quiz2, quiz3];

export default function Project() {
  return (
    <div>
      <div className="lg:text-5xl sm:text-4xl xsm:text-3xl lg:mb-20 xsm:mb-12 font-Kanit">
        <Heading title={"PROJECTS"} />
      </div>

      <div className="xsm:grid xsm:grid-cols-1 xsm:gap-8 xsm:p-0 lg:grid lg:grid-cols-2 xl:gap-24 lg:gap-12  lg:px-4 xl:p-12 lg:flex-wrap lg:justify-evenly">
        <Card
          slides={airSlides}
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
          slides={quizSlides}
          techstack={["#Html", "#Css", "#Javascript", "#Api"]}
          redirect={[
            "https://github.com/Kashyap1ankit/QuizHub",
            "https://quiz-hub-game.netlify.app/",
          ]}
        />
      </div>
    </div>
  );
}

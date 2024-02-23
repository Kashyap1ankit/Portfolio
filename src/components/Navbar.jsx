import NavItem from "./Nav-item";
import Heading from "./Heading";
import Button from "./ContactBtn";
import Image from "./image";
import Profile from "../assets/svg/profile.svg";

export default function NavBar({ handleEvent }) {
  return (
    <div className="flex justify-between flex-wrap shadow-md px-2 rounded-md fixed top-0 left-0 right-0 bg-white scroll-smooth z-40">
      <div className="py-5 px-10 text-4xl font-Verdana font-extrabold">
        <Heading title={"AK."} />
      </div>

      <div className="flex justify-evenly flex-wrap w-3/6  py-5 text-xl content-center">
        <NavItem handleClick={handleEvent[0]} title={"About"} />
        <NavItem handleClick={handleEvent[1]} title={"Projects"} />
        <NavItem handleClick={handleEvent[2]} title={"Skills"} />

        <a href="mailto:kashyap25ankit@gmail.com">
          <div className="flex justify-around place-items-center bg-sky px-8 py-2 rounded-lg text-white  fill-black-500">
            <div className="mr-4">
              <Button text={"Contact"} />
            </div>

            <div className="size-6 invert-100">
              <Image link={Profile} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

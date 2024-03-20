import NavItem from "./Nav-item";
import Heading from "./Heading";
import Button from "./ContactBtn";
import Image from "./image";
import Profile from "../assets/svg/profile.svg";

export default function NavBar({ handleEvent }) {
  return (
    <div className="xsm:w-11/12 xsm:rounded-full xsm:flex xsm:justify-between xsm:py-2 xl:w-1/2 lg:py-4 shadow-md  lg:rounded-full items-center mx-auto fixed top-4 left-0 right-0 bg-white z-40">
      <div className="xsm:text-xl lg:py-2 lg:px-5 sm:px-2 xsm:px-2 lg:text-4xl sm:text-2xl  font-Verdana font-extrabold ">
        <Heading title={"AK."} />
      </div>

      <div
        className={`items-center xsm:text-sm xsm:flex xsm:justify-evenly xsm:flex-wrap lg:w-3/4 sm:w-full lg:py-0 lg:text-xl lg:content-center lg:mt-0`}
      >
        <NavItem handleClick={handleEvent[0]} title={"About"} />
        <NavItem handleClick={handleEvent[1]} title={"Projects"} />
        <NavItem handleClick={handleEvent[2]} title={"Skills"} />

        <a href="mailto:kashyap25ankit@gmail.com">
          <div className="xsm:hidden md:flex md:justify-normal md:place-items-left md:px-2 md:w-fit md:px-4 md:py-2 lg:flex  lg:justify-around lg:place-items-center md:rounded-lg  text-white bg-sky ">
            <div className="md:mr-4 md:text-xl">
              <Button text={"Contact"} />
            </div>

            <div className="md:size-6 invert-100">
              <Image link={Profile} />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

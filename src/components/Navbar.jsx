import NavItem from "./Nav-item";
import Heading from "./Heading";
import Button from "./ContactBtn";
import Image from "./image";
import Profile from "../assets/svg/profile.svg";
import Three from "../assets/svg/three.svg";
import Cross from "../assets/svg/cross.svg";
import { useRecoilState } from "recoil";
import { clickAtom } from "../store/atom";

export default function NavBar({ handleEvent }) {
  const [clicked, setClick] = useRecoilState(clickAtom);
  return (
    <div className="lg:flex lg:justify-between lg:flex-wrap sm:flex sm:justify-between xsm:flex xsm:justify-between shadow-md px-2 rounded-md fixed top-0 left-0 right-0 bg-white z-40">
      <div className="py-5 lg:px-10 sm:px-2 sxm:px-2 lg:text-4xl sm:text-2xl xsm:text-2xl font-Verdana font-extrabold">
        <Heading title={"AK."} />
      </div>

      <div
        className={`xsm:grid xsm:grid-cols-1 xsm:gap-5 ${
          clicked ? "" : "xsm:hidden"
        }   lg:flex lg:justify-evenly lg:flex-wrap lg:w-9/12 sm:w-full lg:py-5 lg:text-xl lg:content-center xsm:mt-12 lg:mt-0`}
      >
        <NavItem handleClick={handleEvent[0]} title={"About"} />
        <NavItem handleClick={handleEvent[1]} title={"Projects"} />
        <NavItem handleClick={handleEvent[2]} title={"Skills"} />

        <a href="mailto:kashyap25ankit@gmail.com">
          <div className="lg:flex sm:flex xsm:flex lg:justify-around sm:justify-normal xsm:justify-normal  lg:place-items-center sm:place-items-left xsm:place-items-left bg-sky lg:px-8 sm:px-2  xsm:px-2 lg:py-2 xsm:py-2 lg:rounded-lg sm:rounded-md xsm:rounded-md text-white lg:w-fit sm:w-1/3 xsm:w-12/12 xsm:mb-8">
            <div className="lg:mr-4 sm:mr-4 xsm:mr-4">
              <Button text={"Contact"} />
            </div>

            <div className="lg:size-6 sm:size-6  xsm:size-6  invert-100">
              <Image link={Profile} />
            </div>
          </div>
        </a>
      </div>

      <div
        onClick={() => {
          setClick(!clicked);
        }}
        className="xsm:block lg:hidden size-8 xsm:mt-6 z-50"
      >
        {!clicked ? <img src={Three} alt="" /> : <img src={Cross} alt="" />}
      </div>
    </div>
  );
}

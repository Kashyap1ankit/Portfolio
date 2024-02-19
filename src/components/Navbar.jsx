import NavItem from "./Nav-item";
import Heading from "./Heading";
import Button from "./ContactBtn";

export default function NavBar() {
  return (
    <div className="flex justify-between shadow-md px-2 my-4 rounded-md">
      <div className="py-5 px-10 text-4xl font-Verdana font-extrabold">
        <Heading title={"AK."} />
      </div>
      <div className="flex justify-evenly w-3/6 py-5 text-xl content-center">
        <NavItem title={"About"} />
        <NavItem title={"Projects"} />
        <div className="bg-sky p-2 rounded-lg text-white fill-black-500">
          <Button text={"Contact me"} />
        </div>
      </div>
    </div>
  );
}

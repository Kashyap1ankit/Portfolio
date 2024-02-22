export default function NavItem(props) {
  function scroll() {
    props.handleClick();
  }

  return (
    <div
      onClick={scroll}
      className="font-Anta px-4 rounded-md hover:cursor-pointer hover:underline opacity-55 hover:opacity-100"
    >
      <p>{props.title}</p>
    </div>
  );
}

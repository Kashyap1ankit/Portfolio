export default function Image({ link, redirect }) {
  function handleClick(event) {
    event.preventDefault();
    window.location.href = redirect;
  }
  return <img onClick={handleClick} src={link}></img>;
}

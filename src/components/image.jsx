export default function Image({ link, redirect }) {
  function handleClick() {
    window.location.href = redirect;
  }
  return <img onClick={handleClick} src={link}></img>;
}

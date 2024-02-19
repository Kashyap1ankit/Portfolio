export default function NavItem({ title }) {
  return (
    <div className=" px-4 rounded-md hover:cursor-pointer hover:underline opacity-55 hover:opacity-100">
      <p>{title}</p>
    </div>
  );
}

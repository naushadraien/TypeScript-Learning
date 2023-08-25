import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-6 bg-zinc-500 text-white px-4 rounded py-5 font-serif">
      <div className="mr-72 font-bold text-white">
        <Link to="/">Home</Link>
      </div>
      <article className="space-x-3 flex flex-1 justify-end items-center">
        <Link to="/itemlist">ItemList</Link>
        <Link to="/postevents">PostEvents</Link>
        <Link to="/postlist">PostList</Link>
        <Link to="/shapelist">ShapeList</Link>
        <Link to="/themechanger">ThemeChanger</Link>
        <Link to="/user">User</Link>
        <Link to="/userefex">UseRefEx</Link>
      </article>
    </nav>
  );
};

export default Navbar;

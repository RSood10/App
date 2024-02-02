import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="bg-black flex flex-row justify-around">
      <ul className="text-white flex flex-row">
        <li className="p-4">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="p-4">
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li className="p-4">
          <NavLink to={"contact"}>Contact</NavLink>
        </li>
      </ul>
      <ul className="text-white flex flex-row">
        <li className="p-4">
          <NavLink to={"signin"}>Signin</NavLink>
        </li>
        <li className="p-4">
          <NavLink to={"profile"}>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

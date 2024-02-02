import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="flex flex-col bg-gray-900 ">
      <div className="flex flex-row justify-around">
        <ul className="text-white ">
          <li className="p-4">
            <NavLink>GitHub</NavLink>
          </li>
          <li className="p-4">
            <NavLink>Instagram</NavLink>
          </li>
          <li className="p-4">
            <NavLink>Youtube</NavLink>
          </li>
          <li className="p-4">
            <NavLink>X</NavLink>
          </li>
        </ul>
        <p className="text-white p-4 max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
          esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Vel accusamus
          optio molestiae repellat atque eum quos perferendis itaque alias eos
          totam eius non libero distinctio quasi quisquam, reprehenderit in
          voluptate.
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <p className="text-white p-4">c@2024 Terms and conditions </p>
      </div>
    </div>
  );
}

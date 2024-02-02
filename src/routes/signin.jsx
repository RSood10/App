import { Form, NavLink } from "react-router-dom";

export function Signin() {
  return (
    <div className="bg-orange-500 flex flex-col h-screen ">
      <Form className="flex flex-col items-center m-10 p-5 ">
        <input type="text" placeholder="Email" className="p-5 m-2 rounded-md" />
        <input
          type="password"
          placeholder="Password"
          className="p-5 m-2 rounded-md"
        />
        <button className="text-white rounded-3xl p-2 bg-black">Sumbit</button>
      </Form>
      <br />
      <NavLink to={"/"} className={"text-white"}>
        Go To Home
      </NavLink>
    </div>
  );
}

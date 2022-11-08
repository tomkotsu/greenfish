import React from "react";

const Navbar = () => {
  return (
    <section className="bg-green-700 p-12 absolute w-full border-b-orange-300 border-b-4">
      <div className="flex justify-evenly items-center text-offwhite text-center ">
        <h1 className="">LOGO</h1>
        <h1 className="">GREENFISH</h1>
        <ul className="flex gap-4 ">
          <li>All Fish</li>
          <li>Fish by Region</li>
          <li>About</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;

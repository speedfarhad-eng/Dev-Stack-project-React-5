import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="fixed w-full z-10 top-0 left-0">
      <div className="flex justify-between items-center  bg-gray-200 px-6 py-4">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 font-black">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-1 text-gray-700">
          <button className=" px-2 py-1">Sign In</button>
          <button className="bg-pink-400 rounded-2xl px-3 py-2">Sing Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import { Search } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo50.png";

function Header() {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <nav className="navbar ">
      <Link to="/" className="flex-none w-10">
        <img src={logo} alt="logo blog" className="w-full" />
      </Link>

      <div
        className={
          "absolute left-0 w-full mt-0.5 bg-white border-b border-zinc-200 top-full py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
          `${searchBoxVisibility ? "show" : "hidden"}`
        }
      >
        <input
          type="text"
          placeholder="Recherche..."
          className="w-full md:w-auto bg-zinc-200 p-2 pl-6 px-[12%] md:pr-6 rounded-full placeholder:text-zinc-400 md:pl-12"
        />
        <Search className="absolute text-zinc-400 right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl" />
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-200 md:hidden"
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
        >
          <Search className="text-xl text-zinc-400" />
        </button>

        <Link
          to="/"
          className="hidden gap-6 pr-4 md:flex link hover:text-zinc-500 "
        >
          <p>Home</p>
        </Link>
        <Link
          to="/about"
          className="hidden gap-6 pr-4 md:flex link hover:text-zinc-500"
        >
          <p>About</p>
        </Link>
        <Link
          to="/blog"
          className="hidden gap-6 pr-4 md:flex link hover:text-zinc-500"
        >
          <p>Blog</p>
        </Link>
      </div>
      <div className="items-center hidden gap-4 ml-auto md:flex">
        <Link
          to="/signIn"
          className="gap-6 p-2 font-bold border-2 rounded-full border-zinc-900 bg-zinc-900 text-zinc-50 hover:text-zinc-900 hover:bg-white hover:border-zinc-500 hover:border-2"
        >
          <p>Connexion</p>
        </Link>
        <Link
          to="/signUp"
          className="gap-6 p-2 font-bold bg-white border-2 rounded-full text-zinc-900 border-zinc-900 hover:text-white hover:bg-zinc-900"
        >
          <p>Inscription</p>
        </Link>
      </div>
      <Outlet />
    </nav>
  );
}

export default Header;

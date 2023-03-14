import Image from "next/image";
import Logo from "./components/logo";
import MenuItem from "./components/menu-item";
import ThemeToggle from "./components/theme-toggle";

export default function Nav() {
  return (
    <header className="h-24 w-full">
      <nav className="justify-between flex container h-full self-center items-center mx-auto">
        <Logo />
        <div className="flex gap-12 ">
          <ul className="flex gap-12 align-center">
            <li>
              <MenuItem href={"/blog"}>Blog</MenuItem>
            </li>
            <li>
              <MenuItem href={"/reviews"}>Reviews</MenuItem>
            </li>
            <li>
              <MenuItem href={"/about-me"}>About Me</MenuItem>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

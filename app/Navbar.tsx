import Link from "next/link";
import { FaBugSlash } from "react-icons/fa6";

const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Issues Page", href: "/issues" },
];

const Navbar = () => {
  return (
    <nav className="flex px-4 h-16 border-b-2 border-gray-800 items-center">
      <Link href="/">
        <FaBugSlash className="w-20 h-6" />
      </Link>
      <ul className="flex px-6 space-x-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-gray-400 hover:text-gray-900 transition-colors text-lg"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

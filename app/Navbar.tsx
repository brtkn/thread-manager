"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBugSlash } from "react-icons/fa6";
import classNames from "classnames";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues Page", href: "/issues/list" },
];

const Navbar = () => {
  const currentPath = usePathname();

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
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors text-lg font-bold": true,
              })}
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

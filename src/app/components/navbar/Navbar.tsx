"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../theme/themeToggle";
import { NavbarItems } from "./navbarItems";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full max-w-[550px] h-10 flex gap-3 font-semibold text-lg">
      {NavbarItems.map((item) => (
        <h2
          key={item.url}
          className={`cursor-pointer dark:hover:text-slate-100 hover:text-slate-800 ${
            pathname === item.url ||
            (item.url === "/blog" && pathname.startsWith("/blog"))
              ? "text-slate-800 dark:text-slate-100"
              : "text-slate-300 dark:text-slate-800"
          }`}
        >
          <Link href={item.url}>{item.label}</Link>
        </h2>
      ))}

      <div className="ml-auto mt-1">
        <ThemeToggle />
      </div>
    </nav>
  );
}

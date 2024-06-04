import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme/themeToggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-3 font-semibold text-lg">
      <h2
        className={`cursor-pointer dark:hover:text-slate-100 hover:text-slate-800 ${
          pathname === "/"
            ? "text-slate-800 dark:text-slate-100"
            : "text-slate-300 dark:text-slate-800"
        }`}
      >
        <Link href="/">home</Link>
      </h2>
      <h2
        className={`cursor-pointer dark:hover:text-slate-100 hover:text-slate-800 ${
          pathname === "/about"
            ? "text-slate-800 dark:text-slate-100"
            : "text-slate-300 dark:text-slate-800"
        }`}
      >
        <Link href="/">about</Link>
      </h2>
      <h2
        className={`cursor-pointer dark:hover:text-slate-100 hover:text-slate-800 ${
          pathname === "/resume"
            ? "text-slate-800 dark:text-slate-100"
            : "text-slate-300 dark:text-slate-800"
        }`}
      >
        <Link href="/">resume</Link>
      </h2>
      <h2
        className={`cursor-pointer dark:hover:text-slate-100 hover:text-slate-800 ${
          pathname === "/blog"
            ? "text-slate-800 dark:text-slate-100"
            : "text-slate-300 dark:text-slate-800"
        }`}
      >
        <Link href="/">blog</Link>
      </h2>

      <div className="ml-auto mt-1">
        <ThemeToggle />
      </div>
    </nav>
  );
}

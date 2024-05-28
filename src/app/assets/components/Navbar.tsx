import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();

  const { resolvedTheme, theme, setTheme } = useTheme();

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
        <button
          onClick={() => {
            setTheme(resolvedTheme === "light" ? "dark" : "light");
          }}
        >
          {theme === "dark" ? (
            <svg
              className="w-5 h-5 stroke-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 stroke-slate-300"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

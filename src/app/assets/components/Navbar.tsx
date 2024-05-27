import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-3 font-semibold text-lg">
      <h2
        className={`cursor-pointer hover:text-slate-800 ${
          pathname === "/" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <Link href="/">home</Link>
      </h2>
      <h2
        className={`cursor-pointer hover:text-slate-800 ${
          pathname === "/about" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <Link href="/">about</Link>
      </h2>
      <h2
        className={`cursor-pointer hover:text-slate-800 ${
          pathname === "/resume" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <Link href="/">resume</Link>
      </h2>
      <h2
        className={`cursor-pointer hover:text-slate-800 ${
          pathname === "/blog" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <Link href="/">blog</Link>
      </h2>
    </nav>
  );
}

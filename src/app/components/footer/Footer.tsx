import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-4">
      <div className="w-full max-w-[550px] flex h-8 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
          <span>designed & developed by</span>
          <Link
            href="https://www.saadsadouk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
          >
            me
          </Link>
        </div>
        <Link
          href="https://github.com/sa6ds/saadsadouk.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 transition-colors hover:text-slate-800 dark:hover:text-slate-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <span>source</span>
        </Link>
      </div>
    </footer>
  );
}

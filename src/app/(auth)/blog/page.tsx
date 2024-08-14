// pages/blog.tsx

import { pageItems } from "@/app/assets/components/pageItems/pageItems";

export default function Blog() {
  const { name } = pageItems.blog;

  return (
    <main>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">
        <span className="flex flex-col">
          <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
            {name.toLowerCase()}
          </span>
        </span>
      </h1>
      <div className="mt-10">{/* Blog content here */}</div>
    </main>
  );
}

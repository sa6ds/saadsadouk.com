import Link from "next/link";
import PageLayout from "../PageLayout";
import { abbreviateMonth } from "@/app/utils/date";
import { sortedPosts } from "@/app/utils/markdown";
import type { Metadata } from "next";
import { pageItems } from "@/app/components/pageItems/pageItems";

export const metadata: Metadata = {
  title: "Blog - Saad Sadouk",
  description:
    "Explore my blog posts on software development, technology trends, and personal insights.",
  openGraph: {
    title: "Blog - Saad Sadouk",
    description:
      "Explore my blog posts on software development, technology trends, and personal insights.",
  },
};

export default function Blog() {
  const { name } = pageItems.blog;

  return (
    <PageLayout>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">
        <span className="flex flex-col">
          <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
            {name.toLowerCase()}
          </span>
        </span>
      </h1>
      <div className="mt-10">
        <div className="space-y-4">
          {sortedPosts.map(({ id, title, pubDate }) => (
            <div key={id}>
              <Link className="flex text-md font-semibold" href={`/blog/${id}`}>
                <h2 className="w-96 my-auto">{title}</h2>
                <span className="h-1 w-1 bg-secondaryDarker rounded-full" />
                <p className="ml-auto my-auto text-nowrap">
                  {abbreviateMonth(pubDate)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

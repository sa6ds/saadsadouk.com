import { getSortedPostsData, BlogPostData } from "../../utils/markdown";
import Link from "next/link";
import PageLayout from "../PageLayout";

export default function Blog() {
  const allPostsData: BlogPostData[] = getSortedPostsData();

  return (
    <PageLayout>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">
        <span className="flex flex-col">
          <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
            blog
          </span>
        </span>
      </h1>
      <div className="mt-10">
        <ul className="space-y-4">
          {allPostsData.map(({ id, title, pubDate }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <h2>{title}</h2>
                <p>{pubDate}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}

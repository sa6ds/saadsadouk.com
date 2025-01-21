import React from "react";
import { getPostData, getSortedPostsData } from "../../../utils/markdown";
import PageLayout from "../../PageLayout";
import { abbreviateMonth, timeSince } from "../../../utils/date";
import { calculateReadingTime } from "../../../utils/readingTime";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type BlogPostProps = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const postData = await getPostData(params.slug);
  if (!postData) throw new Error(`Post not found: ${params.slug}`);
  const readingTime = calculateReadingTime(postData.contentHtml || "");

  return (
    <PageLayout>
      <h1>
        <span className="flex flex-col">
          <span className="text-5xl text-slate-800 dark:text-slate-50 font-semibold tracking-tighter ">
            {postData.title.toLowerCase()}
          </span>
        </span>
      </h1>
      <div className="my-5">
        <p className="text-slate-500 dark:text-slate-300">
          {abbreviateMonth(postData.pubDate)} ({timeSince(postData.pubDate)})
          <span className="mx-2" style={{ fontSize: "0.6em" }}>
            •
          </span>
          {readingTime} min read
        </p>
      </div>
      <div className="prose prose-lg dark:prose-invert">
        {postData.tldr && (
          <p className="text-slate-500 dark:text-slate-300">
            <strong className="text-slate-800 dark:text-slate-50">tldr:</strong>{" "}
            {postData.tldr}
          </p>
        )}
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ node, ...props }) => {
              const child = React.Children.toArray(props.children).find(
                (child) => typeof child === "string"
              );
              const id =
                typeof child === "string"
                  ? child.replace(/\s+/g, "-").toLowerCase()
                  : "";
              return (
                <h1
                  id={id}
                  className="relative group text-slate-800 my-5 dark:text-slate-50 font-bold text-xl tracking-tight"
                >
                  <a
                    href={`#${id}`}
                    className="absolute -left-6 opacity-0 group-hover:opacity-100 transition-opacity text-slate-800 dark:text-slate-50 hidden sm:inline-block"
                  >
                    #
                  </a>
                  {props.children}
                </h1>
              );
            },
            p: ({ node, ...props }) => (
              <p
                className="my-3 text-slate-500 dark:text-slate-300"
                {...props}
              />
            ),
            strong: ({ node, ...props }) => (
              <strong
                className="text-slate-800 dark:text-slate-50"
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-slate-800 dark:border-slate-50 pl-4 italic text-slate-500 dark:text-slate-50 my-4"
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-5 mt-2" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-5 mt-2" {...props} />
            ),
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            code: ({ node, ...props }) => (
              <code
                className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-1 rounded"
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                className="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto my-4"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                target="_blank"
                className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
                {...props}
              />
            ),
            img: ({ node, ...props }) => (
              <img
                alt={props.alt}
                className="max-w-full h-auto my-4 mx-auto"
                {...props}
              />
            ),
            video: ({ node, ...props }) => (
              <video
                controls
                className="max-w-full h-auto my-4 mx-auto"
                {...props}
              />
            ),
          }}
        >
          {postData.contentHtml || ""}
        </ReactMarkdown>
      </div>
    </PageLayout>
  );
}

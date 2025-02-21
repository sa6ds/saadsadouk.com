import React from "react";
import { getPostData, getSortedPostsData } from "../../../utils/markdown";
import PageLayout from "../../PageLayout";
import { abbreviateMonth, timeSince } from "../../../utils/date";
import { calculateReadingTime } from "../../../utils/readingTime";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CodeBlock from "@/app/components/CodeBlock";

type BlogPostProps = {
  params: { slug: string };
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}

const mergeCodeBlocks = (content: string): string => {
  const normalizedContent = content.replace(/\r\n/g, "\n");

  return normalizedContent.replace(
    /```(\w+)[\s\S]*?```[\s]*```\1[\s\S]*?```/g,
    (match) => {
      // Remove the middle "```language" markers and keep the content
      return match.replace(/```\w+\n([\s\S]*?)```[\s]*```\w+\n/g, "$1");
    }
  );
};

export default async function BlogPost({ params }: BlogPostProps) {
  const postData = await getPostData(params.slug);
  if (!postData) throw new Error(`Post not found: ${params.slug}`);

  const processedContent = mergeCodeBlocks(postData.contentHtml || "");

  const readingTime = calculateReadingTime(processedContent);

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
              <div
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
            code: ({
              node,
              className,
              children = "",
              ...props
            }: {
              node?: any;
              className?: string;
              children?: React.ReactNode;
            } & React.HTMLAttributes<HTMLElement> & { inline?: boolean }) => {
              const { inline } = props;
              const match = /language-(\w+)/.exec(className || "");
              const language = match ? match[1] : "";

              if (inline) {
                return (
                  <code className="bg-gray-800 rounded px-1" {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  language={language}
                  value={String(children).replace(/\n$/, "")}
                  showLineNumbers
                />
              );
            },
            pre: ({ node, ...props }) => <pre {...props} />,
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
                className="max-w-full h-auto my-4 mx-auto pointer-events-none select-none"
                draggable="false"
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
          {processedContent}
        </ReactMarkdown>
      </div>
    </PageLayout>
  );
}

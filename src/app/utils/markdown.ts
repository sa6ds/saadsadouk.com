import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

const postsDirectory = path.join(process.cwd(), "/src/app/content/blog");

export type BlogPostData = {
  id: string;
  title: string;
  pubDate: string;
  contentHtml?: string;
};

export function getSortedPostsData(): BlogPostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id: fileName.replace(/\.md$/, ""),
      title: matterResult.data.title as string,
      pubDate: matterResult.data.pubDate as string,
    };
  });

  return allPostsData.sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
}

export async function getPostData(id: string): Promise<BlogPostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title as string,
    pubDate: matterResult.data.pubDate as string,
  };
}

export const allPostsData: BlogPostData[] = getSortedPostsData();

export const sortedPosts = allPostsData.sort((a, b) => {
  return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
});

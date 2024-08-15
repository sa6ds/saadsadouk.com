import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import slugify from "slugify";

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

    const slug = slugify(matterResult.data.title, { lower: true });

    return {
      id: slug,
      title: matterResult.data.title as string,
      pubDate: matterResult.data.pubDate as string,
    };
  });

  return allPostsData.sort((a, b) => {
    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
  });
}

export async function getPostData(slug: string): Promise<BlogPostData> {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find((name) => {
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return slugify(matterResult.data.title, { lower: true }) === slug;
  });

  if (!fileName) {
    throw new Error("Post not found");
  }

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    contentHtml,
    title: matterResult.data.title as string,
    pubDate: matterResult.data.pubDate as string,
  };
}

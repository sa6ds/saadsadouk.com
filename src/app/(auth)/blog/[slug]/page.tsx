import {
  getPostData,
  getSortedPostsData,
  BlogPostData,
} from "../../../utils/markdown";
import PageLayout from "../../PageLayout";

type BlogPostProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogPost({ params }: BlogPostProps) {
  const postData = await getPostData(params.slug);

  return (
    <PageLayout>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">
        <span className="flex flex-col">
          <span className="mb-[-10px] text-slate-800 dark:text-slate-50 font-semibold tracking-tight sm:tracking-tighter">
            {postData.title.toLowerCase()}
          </span>
        </span>
      </h1>
      <div className="mt-10">
        <p>{postData.pubDate}</p>
      </div>

      <div
        className="mt-4 prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }}
      />
    </PageLayout>
  );
}

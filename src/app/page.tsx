import Image from "next/image";
import PageLayout from "./(auth)/PageLayout";
import Link from "next/link";
import { getSortedPostsData } from "./utils/markdown";
import { abbreviateMonth, timeSince } from "./utils/date";

const ImageItem = ({ src, rotate }: { src: string; rotate: boolean }) => (
  <div className="relative h-64 w-48 md:h-72 md:w-56">
    <Image
      src={src}
      alt="Picture of the author"
      fill
      sizes="(max-width: 768px) 192px, 224px"
      priority
      className={`object-cover overflow-hidden rounded-xl ${
        rotate ? "rotate-1" : "-rotate-1"
      }`}
    />
  </div>
);

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <PageLayout>
      <div className="h-96">
        <div className="text-slate-800 dark:text-slate-50 font-semibold tracking-[-2.3px] sm:tracking-[-3.3px] md:tracking-[-4.3px]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl">
            <span className="flex flex-col items-start">
              <span className="mb-[-5px] sm:mb-[-10px]">meet saad,</span>
              <span className="text-5xl sm:text-6xl md:text-7xl whitespace-nowrap">
                software engineer
              </span>
            </span>
          </h1>
        </div>

        <div className="mt-4">
          <p>Full-Stack Developer and student at George Mason University</p>
        </div>

        <div className="space-y-2 mt-4">
          <h1 className="text-slate-800 dark:text-slate-50 text-lg font-semibold tracking-tight">
            Latest Blog Posts
          </h1>
          {allPostsData.slice(0, 2).map(({ id, title, pubDate }) => (
            <div key={id}>
              <Link className="flex text-sm font-semibold" href={`/blog/${id}`}>
                <h2 className="w-96 my-auto">{title}</h2>
                <span className="h-1 w-1 bg-secondaryDarker rounded-full" />

                <p className="ml-auto my-auto whitespace-nowrap">
                  {timeSince(pubDate)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 right-0 w-full pointer-events-none py-2 -mt-24 sm:-mt-24 md:-mt-16 overflow-hidden">
        <div className="flex justify-center">
          <div className="flex flex-nowrap space-x-4 md:space-x-8">
            <ImageItem src="/landing-images/img-2.jpg" rotate />
            <ImageItem src="/landing-images/img-1.jpg" rotate={false} />
            <ImageItem src="/landing-images/img-5.jpg" rotate />
            <ImageItem src="/landing-images/img-4.jpg" rotate={false} />
            <ImageItem src="/landing-images/img-3.jpg" rotate />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

import { pageItems } from "@/app/components/pageItems/pageItems";
import Link from "next/link";
import PageLayout from "../PageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Saad Sadouk",
  description:
    "Learn about me, Saad Sadouk, a Full-Stack Developer and student at George Mason University. Discover my background, skills, and passion for software engineering.",
  openGraph: {
    title: "About - Saad Sadouk",
    description:
      "Learn about me, Saad Sadouk, a Full-Stack Developer and student at George Mason University. Discover my background, skills, and passion for software engineering.",
    images: [
      {
        url: "https://www.saadsadouk.com/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function About() {
  const { name } = pageItems.about;

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
        <h3 className="text-slate-800 my-5 dark:text-slate-50 font-bold text-xl tracking-tight">
          About Me
        </h3>
        <p>
          Welcome to my internet space! My name is Saad, a software developer
          pursuing a Bachelor of Science in Computer Science at George Mason
          University. Originally from the Virginia Beach area, I have a deep
          passion for software development and design.
        </p>
        <p className="mt-4">
          My journey into technology began in my early teens, driven by a
          curiosity about how computers and software work. This led me to persue
          my Bachelor of Science in Computer Science at George Mason University.
        </p>
        <p className="mt-4">
          I gained valuable experience as a Software Engineer Intern at{" "}
          <a
            href="https://www.ipconfigure.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
          >
            IPConfigure Inc.
          </a>
          , where I worked with a talented team on a web-based UI using Angular
          and TypeScript. This role taught me about the software development
          life cycle and industry standards.
        </p>
        <p className="mt-4">
          I&apos;m the sole developer and founder of{" "}
          <Link
            target="_blank"
            className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
            href={"https://github.com/sa6ds/flipassist"}
          >
            flipassist
          </Link>
          , a successful all-in-one toolkit with 100+ users from all over the
          world and growing. Read more about how I transformed a simple script
          into a successful SaaS{" "}
          <Link
            className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
            href={"/blog/from-script-to-saas"}
          >
            here
          </Link>
          .
        </p>

        <p className="mt-4">
          As I continue to grow as a developer, I am passionate about building
          quality software that enhances user experiences. My goal is to
          contribute to meaningful projects and develop innovative solutions
          that make a positive impact. I look forward to joining a team where I
          can apply my skills as a software engineer to create valuable
          products.
        </p>

        <h3 className="text-slate-800 my-5 dark:text-slate-50 font-bold text-xl tracking-tight">
          Technical Contributions
        </h3>
        <ul className="list-disc pl-5 mt-2">
          <li key="ipconfigure" className="mb-2">
            Interned at{" "}
            <Link
              target="_blank"
              className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
              href={"https://www.ipconfigure.com/"}
            >
              IPConfigure Inc.
            </Link>
            , where I developed a web-based UI using Angular and TypeScript.
          </li>
          <li className="mb-2">
            Founder and sole developer of{" "}
            <Link
              target="_blank"
              className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
              href={"https://github.com/sa6ds/flipassist"}
            >
              flipassist
            </Link>
            , a successful all-in-one toolkit with 100+ users worldwide.
          </li>
          <li className="mb-2">
            Contributed to high-profile open-source projects, including a
            library with over 500 stars on GitHub.
          </li>
          <li className="mb-2">
            Organized and led coding workshops at local community centers,
            teaching programming basics to high school students.
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

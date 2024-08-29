import { pageItems } from "@/app/components/pageItems/pageItems";
import Link from "next/link";
import PageLayout from "../PageLayout";

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
          Hello and welcome to my website! My name is Saad, and I am a software
          developer pursuing a Bachelor of Science in Computer Science at George
          Mason University. Originally from the Virginia Beach area, I have a
          deep passion for software development and design.
        </p>
        <p className="mt-4">
          My journey into technology began in my early teens, driven by a
          curiosity about how computers and software work. This led me to earn
          an Associate in Computer Science from Virginia Peninsula Community
          College with a GPA of 3.9.
        </p>
        <p className="mt-4">
          I gained valuable experience as a Software Developer Intern at
          IPConfigure Inc., where I worked with a talented team on a web-based
          UI using Angular and TypeScript. This role taught me about the
          software development life cycle and industry standards.
        </p>
        <p className="mt-4">
          In my time learning more about software development, I recognized the
          challenges of inventory management as a former reseller, so I created{" "}
          <Link
            target="_blank"
            className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
            href={"https://github.com/sa6ds/flipassist"}
          >
            flipassist
          </Link>
          , a full-stack web app designed to simplify this process for
          resellers.
        </p>
        <p className="mt-4">
          I dedicated my evenings to developing the app, focusing on features
          that address resellers' specific needs. The beta version quickly
          gained traction, attracting a growing user base within the first
          month. Seeing this rapid adoption and positive feedback was incredibly
          rewarding and further fueled my passion for software development.
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
            Founder and developer of{" "}
            <Link
              target="_blank"
              className="border-b border-gray-300 transition-[border-color] hover:border-gray-600 dark:border-gray-500 dark:hover:border-white"
              href={"https://github.com/sa6ds/flipassist"}
            >
              flipassist
            </Link>
            , a successful full-stack web app for resellers.
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

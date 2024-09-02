import { pageItems } from "@/app/components/pageItems/pageItems";
import PageLayout from "../PageLayout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Saad Sadouk",
  description:
    "View my resume. I'm a Full-Stack Developer with experience in various technologies and projects.",
  openGraph: {
    title: "Resume - Saad Sadouk",
    description:
      "View my resume. I'm a Full-Stack Developer with experience in various technologies and projects.",
  },
};

export default function Resume() {
  const { name } = pageItems.resume;

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
        <div className="my-4 border-b border-neutral-200/50 pb-3">
          <h2 className="text-2xl mb-4 text-slate-800 dark:text-slate-50 font-bold tracking-tight sm:tracking-tighter">
            Saad Sadouk
          </h2>

          <div className="flex gap-4">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Image
                src="/svgs/clip.svg"
                alt="Resume PDF"
                width={20}
                height={20}
                className="dark:invert"
              />
            </a>
            <a
              href="https://github.com/sa6ds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svgs/githubIcon.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/saadsadouk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svgs/linkedinIcon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="dark:invert"
              />
            </a>
          </div>
        </div>
        <div className="mb-4">
          <h1 className="text-xl my-4 text-slate-800 dark:text-slate-50 font-bold tracking-tight sm:tracking-tighter">
            Education
          </h1>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800 dark:text-slate-50">
              George Mason University
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              2023 - 2025
            </span>
          </div>
          <p className="mb-4">Bachelors of Science Computer Science</p>

          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-800 dark:text-slate-50">
              Virginia Peninsula Community College
            </h3>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              2021 - 2023
            </span>
          </div>
          <p>Associates of Science Computer Science</p>
        </div>
        <div className="flex w-full justify-between border-b border-neutral-200/80 border-dashed pb-3 text-sm text-neutral-600"></div>

        <div className="my-4">
          <h1 className="text-xl mb-4 text-slate-800 dark:text-slate-50 font-bold tracking-tight sm:tracking-tighter">
            Experience
          </h1>
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-slate-800 dark:text-slate-50">
                Software Developer Intern
              </h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                2022 - 2022
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400">
              IPConfigure Inc
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between border-b border-neutral-200/80 border-dashed pb-3 text-sm text-neutral-600"></div>

        <div className="mt-4">
          <h1 className="text-xl mb-4 text-slate-800 dark:text-slate-50 font-bold tracking-tight sm:tracking-tighter">
            Projects
          </h1>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800 dark:text-slate-50">
              <a
                href="https://github.com/sa6ds/flipassist"
                target="_blank"
                rel="noopener noreferrer"
              >
                flipassist
              </a>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Streamline Your Reselling Game with Our Comprehensive Toolkit.
              Effortlessly manage inventory and simplify operations for
              efficient reselling success.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800 dark:text-slate-50">
              <a
                href="https://github.com/sa6ds/imagen"
                target="_blank"
                rel="noopener noreferrer"
              >
                imagen
              </a>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Ignite your imagination with sketches that come to life. Our
              intuitive AI web app transforms your drawings into breathtaking
              images, making artistic dreams a reality.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-slate-800 dark:text-slate-50">
              <a
                href="https://www.saadsadouk.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                saadsadouk.com
              </a>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Personal portfolio and tech blog showcasing projects and insights
              on software development, design, and more.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

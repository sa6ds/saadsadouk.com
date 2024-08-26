import { pageItems } from "@/app/components/pageItems/pageItems";
import PageLayout from "../PageLayout";

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
      <div className="mt-10">{/* Resume content here */}</div>
    </PageLayout>
  );
}

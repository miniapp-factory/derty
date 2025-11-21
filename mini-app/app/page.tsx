import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import GradeAverage from "@/components/grade-average";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <GradeAverage grades={[90, 80, 70, 85]} />
    </main>
  );
}

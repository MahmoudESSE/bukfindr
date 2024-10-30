import IncrementSection from "@/components/increment-section";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex items-center justify-center align-middle">
          <IncrementSection />
        </div>
      </main>
    </HydrateClient>
  );
}

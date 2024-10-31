import SearchInput from "@/components/search-input";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex h-screen justify-center">
        <div>
          <SearchInput />
        </div>
      </main>
    </HydrateClient>
  );
}

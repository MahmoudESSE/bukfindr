import { HydrateClient } from "@/trpc/server";
import BookView from "../components/book-view";
import { SearchStoreProvider } from "@/providers/search-store-provider";

export default async function Home() {
  return (
    <HydrateClient>
      <SearchStoreProvider>
        <main className="flex h-screen justify-center">
          <div className="w-1/2 gap-x-4 overflow-y-auto border-x px-6">
            <BookView />
          </div>
        </main>
      </SearchStoreProvider>
    </HydrateClient>
  );
}

import BookList from "@/components/book-list";
import SearchInput from "@/components/search-input";
import { HydrateClient } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex h-screen justify-center">
        <div className="w-1/2 gap-x-4 overflow-y-auto border-x px-6">
          <SearchInput />
          <BookList />
        </div>
      </main>
    </HydrateClient>
  );
}

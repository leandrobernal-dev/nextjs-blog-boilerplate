import Posts from "@/components/Posts";
import Search from "@/components/Search";

export default function SearchPage(req) {
  const searchQuery = req.searchParams.q || "";

  return (
    <div>
      <h1 className="pb-8 text-2xl">Search</h1>
      <Search searchQuery={searchQuery}>
        {searchQuery.length > 1 && <Posts searchQuery={searchQuery} />}
      </Search>
    </div>
  );
}

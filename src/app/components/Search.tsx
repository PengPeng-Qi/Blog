import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { initializeSearch, searchBlogs } from "../lib/search";
import { Blog } from "../types/blogs";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Blog[]>([]);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    initializeSearch();
  }, []);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (event.target.value.length > 2) {
      const searchResults = searchBlogs(event.target.value);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="select-none">
      <div
        className="rounded-lg py-2 hover:bg-gray-200 dark:hover:bg-gray-800"
        onClick={() => {
          setShowDialog((value) => !value);
        }}
      >
        <MagnifyingGlassIcon width={32} height={16} />
      </div>
      {showDialog && (
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search posts"
          />
        ) && (
          <ul>
            {results.map((post) => (
              <li key={post.slug}>
                <a href={`/article/${post.slug}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

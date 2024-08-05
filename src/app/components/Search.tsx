import { useEffect, useState } from "react";
import { initializeSearch, searchBlogs } from "../lib/search";
import { Blog } from "../types/blogs";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Blog[]>([]);

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
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search posts"
      />
      <ul>
        {results.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

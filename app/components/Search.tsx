import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { initializeSearch, searchBlogs } from "../lib/search";
import { Blog } from "../types/blogs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
    <div className="select-none">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-56 dark:hover:bg-black"
          >
            <span>Search ...</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="p-0 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center px-3">
              <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
              <Input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search posts"
                className="my-3 h-6 border-0"
                autoFocus
              />
            </DialogTitle>
            <DialogDescription>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                {results.map(({ title, slug }) => (
                  <li key={title + slug}>
                    <a href={`/article/${slug}`}>{title}</a>
                  </li>
                ))}
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

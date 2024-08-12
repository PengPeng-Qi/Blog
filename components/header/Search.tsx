"use client";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getAllBlogs, initializeSearch, searchBlogs } from "@/lib/search";
import { Blog } from "@/types/blogs";
import { FileIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const [results, setResults] = useState<Blog[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    async function fn() {
      await initializeSearch();
      const res = await getAllBlogs();
      setResults(res);
    }
    fn();
  }, []);

  return (
    <div className="mx-3 flex flex-1 select-none">
      <Button
        variant="outline"
        size="sm"
        className="flex w-56 flex-1 justify-between dark:hover:bg-black"
        onClick={() => setOpen(true)}
      >
        <span>Search ...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Blogs">
            {results.map(({ title, slug }) => (
              <CommandItem key={slug}>
                <FileIcon className="mr-2 h-4 w-4" />
                <Link href={`/blogs/${slug}`} onClick={() => setOpen(false)}>
                  {title}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}

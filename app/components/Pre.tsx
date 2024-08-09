"use client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { ReactNode, useRef, useState } from "react";

interface PreProps {
  className: string;
  children: ReactNode;
}

const Pre: React.FC<PreProps> = (props) => {
  const [hasCopied, setHasCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const copyCode = () => {
    if (!codeRef.current) return;

    const textToCopy = Array.from(
      codeRef.current.querySelectorAll("span[data-line]"),
    )
      .map((span) => span.textContent)
      .join("\n");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setHasCopied((value) => !value);
        toast("Copy Successful 🎉");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });

    setTimeout(() => {
      setHasCopied((value) => !value);
    }, 2000);
  };

  return (
    <div className="relative">
      <div className="absolute right-4 top-4">
        {hasCopied ? (
          <Button variant="outline" size="icon" className="h-6 w-6">
            <CheckIcon color="green" className="h-3 w-3" />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6"
            onClick={copyCode}
          >
            <ClipboardIcon className="h-3 w-3" />
          </Button>
        )}
      </div>
      <pre {...props} className="my-4 overflow-x-auto rounded-2xl py-4 shadow">
        <div ref={codeRef}>{props.children}</div>
      </pre>
    </div>
  );
};

export default Pre;

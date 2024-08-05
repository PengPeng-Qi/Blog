"use client";
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
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });

    setTimeout(() => {
      setHasCopied((value) => !value);
    }, 2000);
  };

  return (
    <pre {...props}>
      <div className="relative">
        <div
          className="absolute right-4 flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-lg border border-solid border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={copyCode}
        >
          {hasCopied ? <CheckIcon color="green" /> : <ClipboardIcon />}
        </div>
        <div ref={codeRef}>{props.children}</div>
      </div>
    </pre>
  );
};

export default Pre;

"use client";

import { Label } from "@/components/ui/label";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type radioType = "dark" | "light" | "system";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [radio, setRadio] = useState<radioType | undefined>(undefined);

  // 初始值
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as radioType;

    if (storedTheme) {
      setRadio(storedTheme);
    } else {
      setRadio("system");
      setTheme("system");
    }
  }, []);

  useEffect(() => {
    if (radio) {
      setTheme(radio);
    }
  }, [radio]);

  useEffect(() => {
    if (theme) {
      setRadio(theme as radioType); // 将 theme 同步到 radio
    }
  }, [theme]);

  return (
    <div className="flex items-center">
      <div className="mx-3 flex h-7 items-center rounded-full border border-neutral-400">
        <RadioGroup
          value={radio}
          className="flex items-center justify-center"
          onValueChange={(value) => {
            setRadio(value as radioType);
          }}
        >
          <RadioGroupItem value="system" id="r1" />
          <Label
            htmlFor="r1"
            className={`flex h-6 w-6 cursor-pointer items-center justify-center text-neutral-400 duration-300 hover:text-neutral-950 dark:hover:text-neutral-50 ${
              radio === "system" ? "text-neutral-900 dark:text-neutral-100" : ""
            }`}
          >
            <GearIcon className="h-5 w-5" />
          </Label>

          <RadioGroupItem value="light" id="r2" />
          <Label
            htmlFor="r2"
            className={`mx-1 flex h-6 w-6 cursor-pointer items-center justify-center text-neutral-400 duration-300 hover:text-neutral-950 dark:hover:text-neutral-50 ${
              radio === "light" ? "text-neutral-900" : ""
            }`}
          >
            <SunIcon className="h-5 w-5" />
          </Label>

          <RadioGroupItem value="dark" id="r3" />
          <Label
            htmlFor="r3"
            className={`flex h-6 w-6 cursor-pointer items-center justify-center text-neutral-400 duration-300 hover:text-neutral-950 dark:hover:text-neutral-50 ${
              radio === "dark" ? "text-neutral-100" : ""
            }`}
          >
            <MoonIcon className="h-5 w-5" />
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
}

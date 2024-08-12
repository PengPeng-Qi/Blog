"use client";

import { Label } from "@/components/ui/label";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type radioType = "dark" | "light" | "system";

export default function DarkMode() {
  const Theme = useTheme();
  const [radio, setRadio] = useState<radioType | undefined>(undefined);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as radioType;

    if (storedTheme) {
      setRadio(storedTheme);
    } else {
      setRadio("system");
    }
  }, []);

  useEffect(() => {
    if (radio) {
      Theme.setTheme(radio);
    }
  }, [radio, Theme]);

  return (
    <div className="flex items-center">
      <div className="hidden sm:block">
        <div className="mx-3 h-7 rounded-full border border-gray-400">
          <RadioGroup
            value={radio}
            onValueChange={(value) => setRadio(value as radioType)}
            className="flex items-center justify-center"
          >
            <RadioGroupItem value="system" id="r1" />
            <Label
              htmlFor="r1"
              className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "system"
                  ? "border-gray-300 text-gray-950 dark:text-gray-50"
                  : "border-transparent"
              }`}
            >
              <GearIcon className="h-5 w-5" />
            </Label>

            <RadioGroupItem value="light" id="r2" />
            <Label
              htmlFor="r2"
              className={`mx-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "light"
                  ? "border-gray-500 text-gray-950"
                  : "border-transparent"
              }`}
            >
              <SunIcon className="h-5 w-5" />
            </Label>

            <RadioGroupItem value="dark" id="r3" />
            <Label
              htmlFor="r3"
              className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "dark"
                  ? "border-gray-300 text-gray-50"
                  : "border-transparent"
              }`}
            >
              <MoonIcon className="h-5 w-5" />
            </Label>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

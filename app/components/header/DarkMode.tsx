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
    <div className="hidden sm:block">
      <div className="mx-3 flex justify-center rounded-full border border-gray-400 align-middle">
        <RadioGroup
          value={radio}
          onValueChange={(value) => setRadio(value as radioType)}
          className="flex items-center justify-center"
        >
          <RadioGroupItem value="system" id="r1" />
          <Label htmlFor="r1">
            <GearIcon
              className={`h-8 w-8 cursor-pointer rounded-full border p-2 hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "system"
                  ? "border-gray-300 text-gray-950 dark:text-gray-50"
                  : "border-transparent"
              }`}
            />
          </Label>

          <RadioGroupItem value="light" id="r2" />
          <Label htmlFor="r2">
            <SunIcon
              className={`h-8 w-8 cursor-pointer rounded-full border p-2 hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "light"
                  ? "border-gray-500 text-gray-950"
                  : "border-transparent"
              }`}
            />
          </Label>

          <RadioGroupItem value="dark" id="r3" />
          <Label htmlFor="r3">
            <MoonIcon
              className={`h-8 w-8 cursor-pointer rounded-full border p-2 hover:text-gray-950 dark:hover:text-gray-50 ${
                radio === "dark"
                  ? "border-gray-300 text-gray-50"
                  : "border-transparent"
              }`}
            />
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
}

"use client";

import { Label } from "@/components/ui/label";
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type radioType = "dark" | "light";

export default function DarkMode() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [radio, setRadio] = useState<radioType | undefined>(undefined);
  const [isUpdatedTheme, setIsUpdatedTheme] = useState(false);

  /**
   * 设置按钮：
   *   1. 如果主题是系统模式则获取 systemTheme 的值
   *   2. 如果主题是其他模式，则直接获取值
   * */
  useEffect(() => {
    setMounted(true);

    if (!theme) return;

    // 如果当前值为系统值，则按钮跟随系统主题
    if (theme === "system") {
      setRadio(systemTheme);
      // 如果不为系统模式，则按钮跟随 theme
    } else if (["light", "dark"].includes(theme)) {
      setRadio(theme as radioType);
    }
  }, [theme, systemTheme]);

  // 手动设置 theme
  const updateTheme = (value: radioType) => {
    setTheme(value);
    setIsUpdatedTheme(true);
  };

  // 如果已经修改过 theme 值，则系统颜色再变更的话跟随主题色
  useEffect(() => {
    if (isUpdatedTheme) {
      setTheme("system");
    }
  }, [systemTheme, setTheme]);

  return (
    <div className="flex items-center">
      <div className="mx-3 flex h-7 w-14 items-center rounded-full border border-neutral-400">
        {mounted && (
          <RadioGroup
            value={radio}
            className="flex items-center justify-center"
            onValueChange={(value) => updateTheme(value as radioType)}
          >
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
        )}
      </div>
    </div>
  );
}

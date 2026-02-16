import React from "react";
import { Check, SunIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import type { Theme } from "@/types.ts";
import { PopoverClose } from "@radix-ui/react-popover";
import { useSetTheme, useTheme } from "@/store/theme.ts";

const THEMES: Theme[] = ["system", "dark", "light"];

export default function ThemeButton() {
  const currentTheme = useTheme();
  const setTheme = useSetTheme();

  return (
    <Popover>
      <PopoverTrigger>
        <div className="hover:bg-muted cursor-pointer rounded-full p-2">
          <SunIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-35 p-0">
        {THEMES.map((theme) => (
          <PopoverClose key={`theme-button-${theme}`} asChild>
            <div
              onClick={() => setTheme(theme)}
              className="hover:bg-muted cursor-pointer p-3 flex justify-between items-center"
            >
              {theme}
              {currentTheme === theme && <Check className="size-4"/>}
            </div>
          </PopoverClose>
        ))}
      </PopoverContent>
    </Popover>
  );
}

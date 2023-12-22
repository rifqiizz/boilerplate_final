"use client";

import { useTheme } from "next-themes";
import { Button, Switch } from "@nextui-org/react";
import Link from "next/link";
export const Header = () => {
  const { theme, setTheme } = useTheme();

  function setThemeMode(value) {
    if (value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <div className="text-2xl font-extrabold dark:text-white">ExpiryHub</div>
      </Link>
      <div className="flex gap-4 items-center">
        <div>About</div>
        <div>Features</div>
        <Button>Login</Button>
        <Switch size="sm" onChange={(e) => setThemeMode(e.target.checked)} />
      </div>
    </header>
  );
};
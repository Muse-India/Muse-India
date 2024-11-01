import { ChevronDown, Languages } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavigationMenu = () => {
  return (
    <div className="z-50 flex h-[10vh] w-screen items-center justify-between border-b border-white/50 px-[2.5vw]">
      <div>
        <Image
          src={"/images/logo_with_name.svg"}
          alt={"muse-india logo"}
          height={140}
          width={200}
        />
      </div>
      <div className="flex flex-row items-center gap-8 font-secondary text-xl font-medium text-white">
        <a className="cursor-pointer">Explore Museums</a>
        <a className="cursor-pointer">Upcoming Events</a>
        <div className="flex h-12 cursor-pointer flex-row items-center justify-center gap-2 rounded-xl px-4 transition duration-200 hover:bg-white/20 hover:backdrop-blur-lg">
          <Languages />
          <p>English</p>
          <ChevronDown />
        </div>
        <Link href="/auth">
          <Button className="ml-8 shadow-glow">Login/Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;

"use client";

import AuthForm from "@/components/forms/AuthForm";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

const Auth = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-between">
      <div className="relative flex h-full w-2/5 flex-col items-start justify-between bg-black p-[2vw]">
        <img
          src="/images/hampi_monument.jpg"
          alt="Hampi Monument"
          className="absolute left-0 top-0 z-0 h-full w-full object-cover object-left"
        />
        <div className="absolute right-0 top-0 z-10 h-full w-full bg-gradient-to-b from-transparent to-black/60" />
        <div className="relative z-20 h-16 w-48">
          <Image
            className="object-contain"
            src={"/images/logo_with_name.svg"}
            alt="Muse-India Logo"
            fill
          />
        </div>
        <div className="z-20 flex w-full flex-col gap-y-28 text-white">
          <div>
            <p className="font-primary text-7xl font-medium">
              Connect to your History and Culture with{" "}
              <strong className="ml-4">Muse India</strong>
            </p>
          </div>
          <div className="flex w-full cursor-pointer flex-row items-center justify-between rounded-xl p-4 transition duration-200 hover:bg-white/20 hover:backdrop-blur-lg">
            <div>
              <p className="bg-clip-text font-primary text-4xl font-medium tracking-wide">
                Hampi Monuments
              </p>
              <p className="font-secondary text-xl">Vijayanagara, Karnataka</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-4">
              <p className="font-primary text-2xl font-medium">Explore</p>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                <ArrowUp size={32} className="rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-3/5 items-center justify-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;

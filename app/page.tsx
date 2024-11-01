"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const routeToHome = setTimeout(() => {
      router.push("/home");
    }, 1000);

    return () => clearTimeout(routeToHome);
  }, [router]);

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="py-4 font-primary text-4xl font-semibold">
          Welcome to my Next app
        </h1>
        <div>
          <p>Loading ...</p>
        </div>
      </div>
    </>
  );
}

import NavigationMenu from "@/components/NavigationMenu";
import { ArrowUp, Mic, Search } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-between">
        <Image
          src="/images/lal_bagh_palace.webp"
          alt="Lal Bagh Palace"
          fill
          className="absolute right-0 top-0 -z-10 object-cover object-bottom"
        />
        <div className="absolute right-0 top-0 -z-10 h-full w-full bg-black/50" />
        <NavigationMenu />
        <div className="flex flex-col items-center justify-center gap-y-16">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <p className="z-0 w-3/4 text-center font-primary text-8xl font-[500] leading-[10vh] text-white">
              Explore Culture, Heritage, Honour and Pride
            </p>
            <p className="font-secondary text-3xl font-normal text-white">
              Know about your Heritage, Culture and Connect to your Roots
            </p>
          </div>
          <div className="flex h-[6vh] w-1/3 flex-row items-center justify-between rounded-xl border border-white/20 bg-white/30 px-[1vw] text-white backdrop-blur-xl">
            <Search className="mr-4 h-8 w-8" />
            <p className="w-full text-xl font-light text-secondary opacity-80">
              Eg: &#34;Indian Museum&#34;, &#34;Museums in Pune&#34; etc.
            </p>
            <Mic className="ml-4 h-8 w-8" />
          </div>
        </div>
        <div className="flex h-[8vh] w-full items-center justify-between p-[2.5vh] text-white">
          <div>
            <p className="font-primary text-2xl font-medium">Lal Bagh Palace</p>
            <p className="font-secondary text-xl font-normal">
              Indore Madhya Pradesh
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-x-4 text-3xl">
            <p className="font-primary font-medium">Explore</p>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-lg">
              <ArrowUp size={32} className="rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

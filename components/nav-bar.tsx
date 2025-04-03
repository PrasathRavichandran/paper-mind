import Image from "next/image";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav
      className={
        "sticky h-14 inset-x-0 top-0 w-full z-30 border-b border-gray-300/50 bg-white/75 backdrop-blur-lg transition-all"
      }
    >
      <MaxWidthWrapper className="max-w-7xl h-full flex items-center justify-between">
        <header className="text-mint-500 font-bold w-[5%] ml-5 md:ml-0 md:w-[2%] flex">
          <Image
            src={"/logo-no-background.png"}
            alt="p logo"
            width={1500}
            height={1916}
            quality={100}
          />
          <span className="hidden md:block">apermind.</span>
        </header>

        <div className="hidden md:block">
          <Link href={"/"} className={buttonVariants({ variant: "ghost" })}>
            About
          </Link>

          <Link href={"/"} className={buttonVariants({ variant: "ghost" })}>
            Sign in
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
export default Navbar;

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script();

export default function Home() {
  const steps: { heading: string; description: string }[] = [
    {
      heading: "Sign up for an account",
      description: "Starting out with a free plan. Try out today.",
    },
    {
      heading: "Upload your PDF file",
      description: `We'll process your file and make it ready for you to chat
                with.`,
    },
    {
      heading: "Start asking questions",
      description: `It's that simple. It really takes less than a minute.`,
    },
  ];
  return (
    <MaxWidthWrapper
      className={
        "flex flex-col items-center justify-center overflow-hidden max-w-7xl"
      }
    >
      <div className="flex items-center justify-center h-screen">
        <div className="text-center md:text-left">
          <h1 className={"font-bold text-5xl md:text-6xl max-w-2xl"}>
            Chat with your <span className={"text-mint-500"}>documents</span> in
            a seconds.
          </h1>
          <p className={"text-zinc-600 mt-5 ml-1 max-w-lg"}>
            Unlock the power of your PDFs with PaperMind. Interact with your
            documents using AI-driven conversations to extract insights,
            summaries, and more.
          </p>
          <Link
            href={"/dashboard"}
            className={buttonVariants({
              size: "lg",
              className: "mt-5 font-bold",
            })}
          >
            Get started <ArrowRight className={"h-5 w-5"} />
          </Link>
        </div>
        <div className={"w-1/2 hidden lg:block"}>
          <Image
            src={"/logo.png"}
            width={2000}
            height={1500}
            alt="logo image"
            quality={100}
          />
        </div>
      </div>

      <div className="my-20">
        <div className="text-center">
          <h1 className={"font-bold text-4xl"}>Start chatting in a minutes</h1>
          <p className={"text-zinc-600 mt-2"}>
            Chatting to your PDF files has never been easier than with Papermind
          </p>
        </div>

        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          {steps.map(({ heading, description }, index) => (
            <li className="md:flex-1" key={index}>
              <div className="flex flex-col space-y-2 py-2 pl-4 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-mint-500">
                  Step {index + 1}
                </span>
                <span className="text-xl font-semibold">{heading}</span>
                <span className="mt-2 text-zinc-700">{description}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-30 w-full md:max-w-6xl">
        <div className="py-2 text-center md:py-5">
          <p className="text-sm font-semibold">
            Made with ❤️ by{" "}
            <span
              className={`${dancingScript.className} text-mint-500 text-xl ml-1`}
            >
              prasath
            </span>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

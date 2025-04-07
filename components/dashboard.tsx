"use client";

import { trpc } from "@/trpcConfig/client";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { FolderDown, MessageSquare, Plus, Trash } from "lucide-react";
import dayjs from "dayjs";
import { Skeleton } from "./ui/skeleton";

export default function Dashboard() {
  const { data: files, isLoading } = trpc.getFiles.useQuery();

  return (
    <MaxWidthWrapper className="max-w-7xl">
      <div className="flex flex-row items-center justify-between my-10 pb-6 border-b">
        <h1 className="text-black font-bold text-2xl">My Files</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Upload PDF</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload your PDF</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {files && files.length !== 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                new Date(b.updatedAt).getTime() -
                new Date(a.updatedAt).getTime()
            )
            .map(({ name, id, createdAt }) => (
              <li
                key={id}
                className="col-span-1 divide-y divide-zinc-200 rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <Link href={`/dashboard/${id}`} className="flex flex-col gap-2">
                  <div className="py-4 px-6 flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <div className="flex-1 truncate">
                      <h1 className="text-lg font-medium truncate text-zinc-900">
                        {name}
                      </h1>
                    </div>
                  </div>
                </Link>

                <div className="px-6 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="w-4 h-4" />{" "}
                    {dayjs(createdAt).format("DD MMM YY")}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    mocked
                  </div>
                  <Button
                    size={"sm"}
                    className="w-full"
                    variant={"destructive"}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      ) : isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 space-y-3">
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center gap-2">
          <FolderDown className="w-5 h-5 text-zinc-800" />
          <p> Let's upload your first PDF.</p>
        </div>
      )}
    </MaxWidthWrapper>
  );
}

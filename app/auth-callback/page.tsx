"use client";

import { trpc } from "@/trpcConfig/client";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  // call the trpc query -> authCallback to check if the user is exist in the DB
  const { isSuccess, isError, data, error } = trpc.authCallback.useQuery(
    undefined,
    { retry: true, retryDelay: 500 }
  );

  if (isSuccess && data?.success) {
    // user is synced to the DB
    router.push(origin ? `/${origin}` : "/dashboard");
  }

  if (isError && error.data?.code === "UNAUTHORIZED") {
    router.push("/sign-in");
  }

  return (
    <div>
      <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
      <h2 className="font-semibold text-xl">Setting up the account</h2>
      <p>You will be redirected automatically.</p>
    </div>
  );
}

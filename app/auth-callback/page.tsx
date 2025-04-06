"use client";

import { trpc } from "@/trpcConfig/client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  // call the trpc query -> authCallback to check if the user is exist in the DB
  const { isSuccess, data } = trpc.authCallback.useQuery(undefined);

  // if (isSuccess && data?.success) {
  //   // user is synced to the DB
  //   router.push(origin ? `/${origin}` : "/dashboard");
  // }

  return <div>loading</div>;
}

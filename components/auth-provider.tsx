"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import React, { FC } from "react";

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <KindeProvider>{children}</KindeProvider>;
};

"use client";

import { usePathname, routing, redirect } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Tests() {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <div className="w-screen h-screen justify-center items-center text-white text-balance bg-gray-900 flex"></div>
  );
}

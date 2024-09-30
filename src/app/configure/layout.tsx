import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Steps from "@/components/Steps";
import { Metadata } from "next";

import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Create Case"
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}

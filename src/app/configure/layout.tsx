import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Steps from "@/components/Steps/Steps";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <MaxWidthWrapper className="flex flex-1 flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
}

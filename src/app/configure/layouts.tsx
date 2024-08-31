import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <MaxWidthWrapper className="flex flex-1 flex-col">{children}</MaxWidthWrapper>
};

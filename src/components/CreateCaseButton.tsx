import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type CreateCaseButtonProps = { user?: boolean };

export default function CreateCaseButton({ user }: CreateCaseButtonProps) {
  return (
    <Link
      href="/configure/upload"
      className={buttonVariants({
        size: "sm",
        className: "hidden sm:flex items-center gap-1",
      })}
    >
      Create Case
      <ArrowRight className="ml-1.5 size-5" />
    </Link>
  );
}

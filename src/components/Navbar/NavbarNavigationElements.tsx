import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { useTranslations } from "next-intl";

type Props = {
  user: boolean;
  isAdmin: boolean;
};

export default function NavbarNavigationElements({ user, isAdmin }: Props) {
  const t = useTranslations();

  {
    return user ? (
      <>
        <Link href="/api/auth/logout" className="hover:opacity-80 font-medium">
          {t("Sign out")}
        </Link>
        {isAdmin ? (
          <Link href="/dashboard" className="hover:opacity-80 font-medium">
            {t("Dashboard")}
          </Link>
        ) : null}
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          {t("Create Case")}
          <ArrowRight className="ml-1.5 size-5" />
        </Link>
      </>
    ) : (
      <>
        <Link
          href="  /api/auth/register"
          className="font-medium hover:opacity-80"
        >
          {t("Sign Up")}
        </Link>
        <Link href="/api/auth/login" className="font-medium hover:opacity-80">
          {t("Login")}
        </Link>
        <div className="w-px h-8 bg-zinc-200" />
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          {t("Create Case")}
          <ArrowRight className="ml-1.5 size-5" />
        </Link>
      </>
    );
  }
}

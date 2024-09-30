import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/ui/button";

type Props = {
  user: boolean;
  isAdmin: boolean;
};

export default function NavbarNavigationElements({ user, isAdmin }: Props) {
  {
    return user ? (
      <>
        <Link href="/api/auth/logout" className="hover:opacity-80 font-medium">
          Sair
        </Link>
        {isAdmin ? (
          <Link href="/dashboard" className="hover:opacity-80 font-medium">
            Painel
          </Link>
        ) : null}
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          Criar Capa
          <ArrowRight className="ml-1.5 size-5" />
        </Link>
      </>
    ) : (
      <>
        <Link
          href="  /api/auth/register"
          className="font-medium hover:opacity-80"
        >
          Cadastrar
        </Link>
        <Link href="/api/auth/login" className="font-medium hover:opacity-80">
          Login
        </Link>
        <div className="w-px h-8 bg-zinc-200" />
        <Link
          href="/configure/upload"
          className={buttonVariants({
            size: "sm",
            className: "hidden sm:flex items-center gap-1",
          })}
        >
          Criar Capa <ArrowRight className="ml-1.5 size-5" />
        </Link>
      </>
    );
  }
}

import React, { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";

type LoginModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginModal({ isOpen, setIsOpen }: LoginModalProps) {
  const t = useTranslations();
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[999999]">
        <DialogHeader>
          <div className="relative mx-auto size-24 mb-2">
            <Image
              src="/snake-1.png"
              alt="snake image"
              fill
              className="object-contain"
            />
          </div>
          <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
            {t("Log in to continue")}
          </DialogTitle>
          <DialogDescription className="text-base text-center py-2">
            {t.rich("configSaved", {
              span: (chunks) => (
                <span className="font-medium text-zinc-900">{chunks}</span>
              ),
            })}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            {t("Login")}
          </LoginLink>
          <RegisterLink className={buttonVariants()}>
            {t("Sign up")}
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
}

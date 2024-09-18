import AppLogo from "@/components/AppLogo";
import CheckList from "@/components/CheckList";
import FiveStars from "@/components/FiveStars";
import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import PhoneWithArrows from "@/components/PhoneWithArrows";
import Reviews from "@/components/Reviews/Reviews";
import { buttonVariants } from "@/components/ui/button";
import UserImageGroup from "@/components/UserImageGroup";
import { Link } from "@/i18n/routing";
import { ArrowRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";

// TODO: O que falta:
// consertar o funcionamento do Kinde
// traduzir a página dashboard

export default function Home() {
  const t = useTranslations();
  return (
    <div className="bg-slate-50 dark:bg-gray-900">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0  lg:pt-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start mb-5">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <AppLogo />
              </div>
              <h1 className="relative w-fit tracking-tighter text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                {t.rich("yourImageOnCustom", {
                  span: (chunks) => (
                    <span className="bg-green-600 px-2 text-white">
                      {chunks}
                    </span>
                  ),
                })}
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center  lg:text-left text-balance md:text-wrap">
                {t.rich("catpureMemories", {
                  span: (chunks) => (
                    <span className="font-semibold">{chunks}</span>
                  ),
                })}
              </p>
              <CheckList />
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <UserImageGroup />
                <div className="flex flex-col justify-between items-center  sm:items-start">
                  <FiveStars />
                  <p>
                    <span className="font-semibold">1.250</span>{" "}
                    {t("happy customers")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt:32 lg:mx-0 lg:mt-20 h-fit">
            <PhoneWithArrows />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Value Proposition Section */}

      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper>
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balace !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
              {t.rich("whatCustomersSay", {
                underline: (chunks) => (
                  <span className="relative px-2">
                    {chunks}
                    <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
                  </span>
                ),
              })}
            </h2>
            <img
              src="/snake-2.png"
              className="w-24 order-0 lg:order-2"
              alt="App's snake mascot"
            />
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            {/* TODO First User Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <FiveStars />
              <div className="text-lg leading-8">
                <p>
                  {t.rich("firstComment", {
                    span: (chunks) => (
                      <span className="p-0.5 bg-slate-800 text-white">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
              </div>
              <div className="flex gap-4 mt-2 ">
                <img
                  className="rounded-full size-12 object-cover"
                  src="/users/user-1.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">{t("Verified Purchase")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second User Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <FiveStars />
              <div className="text-lg leading-8">
                <p>
                  {t.rich("secondComment", {
                    span: (chunks) => (
                      <span className="p-0.5 bg-slate-800 text-white">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
              </div>
              <div className="flex gap-4 mt-2 ">
                <img
                  className="rounded-full size-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">{t("Verified Purchase")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section>
        <MaxWidthWrapper className="py-25">
          <div className="mb-12 px-6 lg:pbx8">
            <div className="mx-auto max-w-2xl sm:tex-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balace !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
                {t.rich("uploadPhoto", {
                  span: (chunks) => (
                    <span className="relative px-2 bg-primary text-white">
                      {chunks}
                    </span>
                  ),
                })}
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            {/* TODO study this part */}
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                alt="Arrow image"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-offset-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                  alt="woman kissing a horse image"
                />
              </div>
              <Phone imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit pb-8">
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              {t("High-quality silicon material")}
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              {t("Scratch and fingerprint resitant coating")}
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              {t("Wireless charging compatiple")}
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              {t("Five year print warranty")}
            </li>
            <div className="flex justify-center">
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
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

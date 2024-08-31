import AppLogo from "@/components/AppLogo/AppLogo";
import CheckList from "@/components/CheckList/CheckList";
import CreateCaseButton from "@/components/CreateCaseButton/CreateCaseButton";
import FiveStars from "@/components/FiveStars/FiveStars";
import { Icons } from "@/components/Icons/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Phone from "@/components/Phone/Phone";
import PhoneWithArrows from "@/components/PhoneWithArrows/PhoneWithArrows";
import Reviews from "@/components/Reviews/Reviews";
import UserImageGroup from "@/components/UsersImage/UserImageGroup";
import { Check } from "lucide-react";

export default function Home() {
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
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center  lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case X
                allows you to protect your memories, bnot just your phone case.
              </p>

              <CheckList />
              <div
                className="mt-12 flex flex-col sm:flex-row 
                                items-center sm:items-start gap-5"
              >
                <UserImageGroup />
                <div className="flex flex-col justify-between items-center  sm:items-start">
                  <FiveStars />
                  <p>
                    <span className="font-semibold">1.250</span> happy costumers
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
              What our{" "}
              <span className="relative px-2">
                costumers
                <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
              </span>{" "}
              say
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
                  "The case feels durable and I even got a compliment in the
                  design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
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
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Second User Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <FiveStars />
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it."
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
                    <p className="text-sm">Verified Purchase</p>
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
                Upload your photo and get{" "}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>{" "}
                now
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
              High-quality silicon material
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              Scratch and fingerprint resitant coating
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              Wireless charging compatiple
            </li>
            <li className="w-fit">
              <Check className="size-5 text-green-600 inline mr-1.5" />
              Five year print warranty
            </li>
            <div className="flex justify-center">
              <CreateCaseButton />
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}

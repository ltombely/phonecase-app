import CheckList from "@/components/CheckList/CheckList";
import FiveStars from "@/components/FiveStars/FiveStars";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import UserImage from "@/components/UserImage/UserImage";

export default function Home() {
    return (
        <div className="bg-slate-50 dark:bg-gray-900">
            <section>
                <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0  lg:pt-24 lg:pb-52 xl:gap-x-8 xl:pt-32">
                    <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                        <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items:start">
                            <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                                <img
                                    src="/snake-1.png"
                                    className="w-full"
                                    alt="app logo"
                                />
                            </div>
                            <h1 className="relative w-fit tracking-tighter text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                                Your Image on a{" "}
                                <span className="bg-green-600 px-2 text-white">
                                    Custom
                                </span>{" "}
                                Phone Case
                            </h1>
                            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center  lg:text-left text-balance md:text-wrap">
                                Capture your favorite memories with your own,{" "}
                                <span className="font-semibold">
                                    one-of-one
                                </span>{" "}
                                phone case X allows you to protect your
                                memories, not just your phone case.
                            </p>
                            <CheckList />
                            <div className="mt-12 flex flex-col bsm:flex-row items-center sm:items-start gap-5">
                                <div className="flex -space-x-4">
                                    <UserImage src="/users/user-1.png" />
                                    <UserImage src="/users/user-2.png" />
                                    <UserImage src="/users/user-3.png" />
                                    <UserImage src="/users/user-4.jpg" />
                                    <UserImage src="/users/user-5.jpg" />
                                </div>

                                <div className="flex flex-col justify-between items-center sm:items-start">
                                    <FiveStars />
                                    <p>
                                        <span className="font-semibold">
                                            1.250
                                        </span>{" "}
                                        happy costumers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
        </div>
    );
}

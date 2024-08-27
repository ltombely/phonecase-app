import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    const user = true;
    const isAdmin = true;

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        PhoneCaseApp
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link
                                    href="/api/auth/logout"
                                    className="hover:opacity-80font-medium"
                                >
                                    Sign out
                                </Link>

                                {isAdmin ? (
                                    <>
                                        <Link
                                            href="/dashboard"
                                            className="hover:opacity-80 font-medium"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : null}
                                <Link
                                    href="/configure/upload"
                                    className="font-medium hover:opacity-90 text-white
                                    flex items-center bg-green-500 px-2 py-1 rounded"
                                >
                                    Create Case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/api/auth/register"
                                    className="font-medium hover:opacity-80"
                                >
                                    Sign Up
                                </Link>

                                <Link
                                    href="/configure/upload"
                                    className="font-medium hover:opacity-80"
                                >
                                    Login
                                </Link>
                                <div className="w-px h"/>
                                <Link
                                    href="/configure/upload"
                                    className="font-medium hover:opacity-90 text-white
                                    flex items-center bg-green-500 px-2 py-1 rounded"
                                >
                                    Create Case
                                    <ArrowRight className="ml-1.5 size-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

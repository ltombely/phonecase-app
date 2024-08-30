import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarNavigationElements from "./NavbarNavigationElements";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const isAdmin = user?.email === process.env.ADMIN_EMAIL;

    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="flex z-40 font-semibold">
                        Case<span className="text-green-600">Craft</span>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        <NavbarNavigationElements
                            user={user ? true : false}
                            isAdmin={isAdmin}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CreateCaseButtonProps = { user?: boolean };

export default function CreateCaseButton({ user }: CreateCaseButtonProps) {
    return (
        <Link
            href="/configure/upload"
            className={`font-medium hover:opacity-90 text-white ${
                user ? "flex" : "hidden"
            } sm:flex items-center bg-green-500 px-2 py-1 rounded`}
        >
            Create Case
            <ArrowRight className="ml-1.5 size-5" />
        </Link>
    );
}

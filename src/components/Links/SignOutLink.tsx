import Link from "next/link";

export default function SignOutLink() {
    return (
        <Link href="/api/auth/logout" className="hover:opacity-80 font-medium">
            Sign out
        </Link>
    );
}

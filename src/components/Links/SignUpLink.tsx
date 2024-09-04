import Link from "next/link";

export default function SignUpLink() {
    return (
        <Link
            href="/api/auth/register"
            className="font-medium hover:opacity-80"
        >
            Sign Up
        </Link>
    );
}

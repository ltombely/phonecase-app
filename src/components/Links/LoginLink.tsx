import Link from "next/link";

export default function LoginLink() {
  return (
      <Link
          href="/api/auth/login"
          className="font-medium hover:opacity-80"
      >
          Login
      </Link>
  );
}
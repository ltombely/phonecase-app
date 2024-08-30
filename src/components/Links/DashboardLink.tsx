import Link from "next/link";

export default function DashboardLink() {
  return (
      <Link href="/dashboard" className="hover:opacity-80 font-medium">
          Dashboard
      </Link>
  );
}
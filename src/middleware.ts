import { NextResponse, NextRequest } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/dashboard") {
    const { getPermission } = await getKindeServerSession();
    const userPermission = await getPermission("admin:access");
    const isAdmin = userPermission?.isGranted ? true : false;

    if (isAdmin) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect("http://localhost:3000");
    }
  }
}

export const config = {
  matcher: ["/dashboard", "/dashboard/admin-config"],
};

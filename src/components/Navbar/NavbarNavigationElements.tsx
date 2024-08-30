import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import CreateCaseButton from "../CreateCaseButton/CreateCaseButton";
import DashboardLink from "../Links/DashboardLink";
import LoginLink from "../Links/LoginLink";
import SignOutLink from "../Links/SignOutLink";
import SignUpLink from "../Links/SignUpLink";

type Props = {
    user: boolean;
    isAdmin: boolean;
};

export default function NavbarNavigationElements({ user, isAdmin }: Props) {
    {
        return user ? (
            <>
                <SignOutLink />
                {isAdmin ? <DashboardLink /> : null}
                <CreateCaseButton user={true} />
            </>
        ) : (
            <>
                <SignUpLink />
                <LoginLink />
                <div className="w-px h" />
                <CreateCaseButton />
            </>
        );
    }
}

import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { HandMetal, User } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import  UserAccountnav from "./UserAccountnav";

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (
        <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 mb-2">
            <div className="container flex items-center justify-between">
                <Link href='/banqueimage'>
                    <HandMetal />
                </Link>
                {session?.user ? (
                    <UserAccountnav />
                    ) : (
                <Link className={buttonVariants()} href='/sign-in'>
                        Sign in
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

//  ) : (
//                     <Link className={buttonVariants()} href='/sign-in'>
//                         Sign in
//                     </Link>
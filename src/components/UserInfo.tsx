'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

const handleSignOut = async () => {
    await authClient.signOut()
}
    return (
        <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
            {
                user ? <div className="flex items-center gap-2">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className=""> <div className="avatar">
                            <div className="w-10 rounded-full">
                                <img alt={user?.name.charAt(0).toUpperCase()} src={user?.image as string} />
                            </div>
                        </div>
                            <h2>{user.name}</h2>
                        </div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <h2>{user.name}</h2>
                            <h2>{user.email}</h2>
                            <Link href={"/profile"}>
                                <button className="btn btn-ghost">
                                    👤 আমার প্রোফাইল
                                </button>
                            </Link>
                            <button onClick={handleSignOut} className="btn btn-ghost">
                                Sign Out
                            </button>
                        </ul>
                    </div>

                </div> : <div className=''>
                    <Link href={"/signin"}>
                        <button className="btn btn-ghost mx-5">সাইন ইন</button>
                    </Link>
                    <Link href={"/signup"}>
                        <button className="btn btn-active btn-success bg-[#05893E]">সাইন আপ</button>
                    </Link>
                </div>
            }

        </div>
    );
};

export default UserInfo;
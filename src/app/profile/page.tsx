'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';

const ProfilePage = () => {
const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleSignOut = async () => {
        await authClient.signOut()
        router.push('/signin')
    }
    return (
        <div>
            <h2>আমার প্রোফাইল</h2>
            <h2>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</h2>
            <div>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img alt={user?.name.charAt(0).toUpperCase()} src={user?.image as string} />

                    </div>
                    <h2>{user?.name}</h2>
                    <h2>{user?.email}</h2>
                </div>
                <button onClick={handleSignOut} className="btn btn-ghost">
                    সাইন আউট
                </button>

            </div>
        </div>
    );
};

export default ProfilePage;
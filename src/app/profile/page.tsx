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

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as {name: string}
        await authClient.updateUser({
            ...newUserData,
        })
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
            <form onSubmit={handleUpdateProfile}>

                <fieldset className="fieldset">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="input" placeholder="Name" name = "name"/>
                    <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            Update Profile
          </button>
                </fieldset>
            </form>
        </div>
    );
};

export default ProfilePage;
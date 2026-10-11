'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const ProfilePage = () => {
    const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user



    const [show, setShow] = useState(false)

    const handleSignOut = async () => {
        await authClient.signOut()
        router.push('/signin')
    }

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string }
        await authClient.updateUser({
            ...newUserData,
        })
    }

    const handleShowForm = () => {
        setShow(!show)
    }

    return (
        <div className='bg-base-300 p-3'>
            <h2 className='text-2xl font-bold'>আমার প্রোফাইল</h2>
            <h2>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</h2>
            <div className='flex justify-between bg-base-200 p-4 rounded-2xl mt-5'>
                <div className='flex'>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img alt={user?.name.charAt(0).toUpperCase()} src={user?.image as string} />

                    </div>
                  
                </div>
                <div className='mx-3'>  <h2 className='font-bold text-2xl'>{user?.name}</h2>
                    <h2>{user?.email}</h2></div>
                

            </div>
<div><button onClick={handleSignOut} className="btn btn-outline btn-error">
                   ↩ সাইন আউট
                </button></div>

            </div>

     <div className='flex justify-center'>       <button onClick={handleShowForm} className='btn m-4'>Edit profile</button></div>

            {show && <form onSubmit={handleUpdateProfile}>

               <div className='p-4 rounded-2xl bg-base-200'>
                <h2 className='text-2xl font-bold mb-2'>তথ্য</h2>
                 <fieldset className="fieldset">
                    <label className="label" htmlFor="name">নাম</label>
                    <input type="text" id="name" className="input w-full" placeholder="" name="name" />
                    <button type="submit" className="btn bg-[#05893E] text-white">
                       আপডেট 
                    </button>
                </fieldset>
               </div>
            </form>}
        </div>
    );
};

export default ProfilePage;
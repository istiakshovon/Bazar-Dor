import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
import Link from 'next/link';
import UserInfo from './UserInfo';

const Navbar = () => {

    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

    return (
        <div className=' p-4 border-b border-gray-200'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image className='w-9 p-1 rounded bg-[#05893E]' height={30} width={20} src={'/logo-icon.png'} alt='logo' />
                    <div>
                        <Link href="/"><h2>বাজার দর</h2></Link>
                        <p>{date}</p>
                    </div>
                </div>

               <UserInfo></UserInfo>

            </div>
            <div className='flex justify-start mt-4'>
                <Navlinks></Navlinks>
            </div>

        </div>

    );
};

export default Navbar;
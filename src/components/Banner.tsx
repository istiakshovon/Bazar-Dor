import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Products from './Products';

const Banner = () => {

    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' });

    return (
        <div className='flex justify-between items-center gap-4 p-4 bg-[#FAFCFA] rounded-2xl container mx-auto'>
       <div>
             <p className="text-[#05893E] bg-green-100 p-1 w-45 rounded-2xl text-center">{date}</p>
            <h2 className="text-4xl font-bold mt-4">আজকের বাজারের দাম এক নজরে</h2>
            <p className='mt-4'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
<a href="#allProducts">
            <button className="btn btn-success bg-[#05893E] rounded text-white mt-5">সব পণ্য দেখুন</button>

</a>
       </div>
       <Image height={300} width={600} src="/bazar-hero.png" alt="Banner Image" />
        </div>
    );
};

export default Banner;
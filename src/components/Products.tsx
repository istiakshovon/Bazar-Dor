import React from 'react';
import Banner from "@/components/Banner";
import Marque from "@/components/Marque";
import Image from "next/image";
import Link from "next/link";
const Products = async() => {
     const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
  const data = await res.json()

    return (
        <div>
               <div className="bg-base-300">


    
      {/* increse prices */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">▲ আজ দাম বেড়েছে</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.filter((e: any) => e.change.dir === "up").sort((a: any, b: any) => b.change.value - a.change.value).slice(0, 6).map((e: any) => (
            <Link key={e.id} href={`/details/${e.id}`}><div key={e.id} className="bg-base-200 rounded-2xl gap-2 items-center px-4 py-2">
              <div className="flex gap-2 items-center">
                <span className="w-10 h-10 bg-[#F0F5F0] rounded text-center flex items-center justify-center">{e.image}</span>

                <div className="flex flex-col">  <span>{e.nameBn}</span>
                  <span>per {e.unit}</span></div></div>

              <h2>আজকের দাম</h2>
              <div className="flex justify-between"><span>{e.today} টাকা</span>
                <span className="text-red-500 bg-base-300 rounded-2xl p-1">▲ {e.change.pct}%</span>
              </div>
            </div></Link>
          ))}
        </div>
      </div>


      {/* decrease prices */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold">▼ আজ দাম কমেছে</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.filter((e: any) => e.change.dir === "down").sort((a: any, b: any) => b.change.value - a.change.value).slice(0, 6).map((e: any) => (
           <Link key={e.id} href={`/details/${e.id}`}> <div key={e.id} className="bg-base-200 rounded-2xl gap-2 items-center px-4 py-2">
              <div className="flex gap-2 items-center">
                <span className="w-10 h-10 bg-[#F0F5F0] rounded text-center flex items-center justify-center">{e.image}</span>

                <div className="flex flex-col">  <span>{e.nameBn}</span>
                  <span>per {e.unit}</span></div></div>

              <h2>আজকের দাম</h2>
              <div className="flex justify-between"><span>{e.today} টাকা</span>
                <span className="text-green-500 bg-base-300 rounded-2xl p-1">▼ {e.change.pct}%</span>
              </div>
            </div></Link>
          ))}
        </div>
      </div>


      {/* all products */}
      <div className="mt-10 mb-10 scroll-mt-20" id="allProducts">
        <h2 className="text-2xl font-bold ">সব পণ্য</h2>
        <h2>মোট {data.length}টি পণ্য দেখানো হচ্ছে</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {data.map((e: any) => (
           <Link key={e.id} href={`/details/${e.id}`}> <div key={e.id} className="bg-base-200 rounded-2xl gap-2 items-center px-4 py-2">
              <div className="flex gap-2 items-center">
                <span className="w-10 h-10 bg-[#F0F5F0] rounded text-center flex items-center justify-center">{e.image}</span>

                <div className="flex flex-col">  <span>{e.nameBn}</span>
                  <span>per {e.unit}</span></div></div>

              <h2>আজকের দাম</h2>
              <div className="flex justify-between"><span>{e.today} টাকা</span>

                {e.change.dir === "up" ?
                  <span className="text-green-500">▼{e.change.pct}%</span> : ""
                }
                {e.change.dir === "down" ?
                  <span className="text-red-500">▲{e.change.pct}%</span> : ""}
                {e.change.dir === "flat" ? <span className="text-gray-500">―{e.change.pct}%</span> : ''}
              </div>
            </div></Link>
          ))}
        </div>
      </div>


    </div>
        </div>
    );
};

export default Products;
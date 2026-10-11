import { notFound } from 'next/navigation';
import React from 'react';

const DetailsPage = async ({ params }: { params: { detailsId: string } }) => {
    const { detailsId } = await params
    console.log(detailsId)

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${detailsId}`)
    const data = await res.json()

    const highest = Math.max(...data.markets.map((m: any) => m.max))
    const lowest = Math.min(...data.markets.map((m: any) => m.min))

    if (!data) {
        notFound()
    }

    const totalMax = data.markets.reduce((sum: number, n: any) => sum + n.max, 0)
    const totalMin = data.markets.reduce((sum: number, n: any) => sum + n.min, 0)

    const average = ((totalMax / data.markets.length) + (totalMin / data.markets.length)) / 2;



    return (
        <div className='bg-base-300 '>
            <div >
                <div className='flex justify-between p-5 bg-base-100 mt-5 mb-5 rounded-2xl'>
                    <div className='flex gap-3 mt-4'>
                        <div ><h2 className='p-6 bg-base-300 rounded-2xl mt-1'>{data.image}</h2></div>
                        <div>             <h2 className='text-3xl font-bold'>{data.nameBn}</h2>
                            <h2>প্রতি {data.unit} {data.categoryNameBn}</h2>
                            <h2>গতকালের তুলনায় আজ দাম বেড়েছে · {data.yesterday - data.today} টাকা</h2></div>
                    </div>
                    <div className='bg-base-300 p-3 rounded-2xl'>
                        <h2>আজকের দাম</h2>
                        <h2 className='text-3xl font-bold'>{data.today}</h2>
                        <h2>টাকা /{data.unit}</h2>

                        {data.change.dir === "up" ?
                            <span className="text-red-500">▲{data.change.pct}%</span> : ""
                        }
                        {data.change.dir === "down" ?
                            <span className="text-green-500">▼{data.change.pct}%</span> : ""}
                        {data.change.dir === "flat" ? <span className="text-gray-500">―{data.change.pct}%</span> : ''}

                    </div>


                </div>
                <div className='bg-base-100'>
                    <h2>দামের সারসংক্ষেপ</h2>
                    <div className='grid grid-cols-3 gap-4 mt-5'>
                        <div className='border p-4 rounded-2xl'> <h2>সর্বনিম্ন দাম</h2><span><span className='text-green-600 text-2xl'>{lowest}</span> টাকা</span><h2>সবচেয়ে কম দামের বাজার</h2></div>
                        <div className='border p-4 rounded-2xl'> <h2>সর্বাধিক দাম</h2><span><span className='text-green-600 text-2xl'>{highest}</span> টাকা</span><h2>সবচেয়ে বেশি দামের বাজার</h2></div>
                        <div className='border p-4 rounded-2xl'><h2>গড় দাম</h2><span><span className='text-green-600 text-2xl'>{average.toFixed(2)}</span> টাকা</span><h2>প্রতি কেজি-এর হিসাবে</h2></div>
                    </div>
                    <div>
                        <h2>বাজারভিত্তিক আজকের দাম</h2>
                        <div className='border rounded-2xl p-5'>
                            <div className="grid grid-cols-5 gap-2 font-bold  ">
                                <h2>বাজার</h2>
                                <h2>বিভাগ</h2>
                                <h2 className="text-right">সর্বনিম্ন</h2>
                                <h2 className="text-right">সর্বাধিক</h2>
                                <h2 className="text-right">গড়</h2>
                            </div>
                            {data.markets.map((m: any) => {
                                const avg = (m.min + m.max) / 2
                                return (
                                    <div key={m.market} className="grid grid-cols-5 gap-2 py-2 border-b">
                                        <div>{m.market}</div>
                                        <div>{m.division}</div>
                                        <div className="text-right">{m.min}</div>
                                        <div className="text-right">{m.max}</div>
                                        <div className="text-right">{avg} টাকা</div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
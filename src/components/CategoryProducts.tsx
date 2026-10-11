"use client"

import { useState } from "react"

type SortBy = "default" | "lowtohigh" | "hightolow"

const CategoryProducts = ({ bazar }: { bazar: any[] }) => {
    const [sortBy, setSortBy] = useState<SortBy>("default")

    const sortBazar = (items: any[]) => {
        const sorted = [...items]

        if (sortBy === "lowtohigh") {
            sorted.sort((a, b) => a.today - b.today)
        } else if (sortBy === "hightolow") {
            sorted.sort((a, b) => b.today - a.today)
        }

        return sorted
    }

    return (
        <div>
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="p-6 bg-base-200 rounded-2xl mt-3 "
            >
                <option value="default">ডিফল্ট</option>
                <option value="lowtohigh">কম থেকে বেশি</option>
                <option value="hightolow">বেশি থেকে কম</option>
            </select>

            <h2 className="mt-5">মোট {bazar.length}টি পণ্য দেখানো হচ্ছে</h2>

            <div className="grid grid-cols-3 gap-4 mt-4">
                {sortBazar(bazar).map((d: any) => (
                    <div key={d.id} className="bg-base-200 rounded-2xl gap-2 items-center px-4 py-2">
                        <div className="flex gap-2 items-center">
                            <span className="w-10 h-10 bg-[#F0F5F0] rounded text-center flex items-center justify-center">
                                {d.image}
                            </span>
                            <div className="flex flex-col">
                                <span>{d.nameBn}</span>
                                <span>per {d.unit}</span>
                            </div>
                        </div>

                        <h2>আজকের দাম</h2>
                        <div className="flex justify-between">
                            <span>{d.today} টাকা</span>

                            {d.change.dir === "up" && <span className="text-green-500">▼{d.change.pct}%</span>}
                            {d.change.dir === "down" && <span className="text-red-500">▲{d.change.pct}%</span>}
                            {d.change.dir === "flat" && <span className="text-gray-500">―{d.change.pct}%</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryProducts;
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Product {
    id: number | string
    image: string
    nameBn: string
    today: number | string
    unit: string
    change: {
        dir: "up" | "down" | "flat"
        pct: number | string
    }
}

const Marque = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
    const data = await res.json()

    return (
        <div>

            <MarqueeText direction='right' duration={10}>
                {data.map((b : Product) => <span key={b.id} className="flex gap-2 items-center px-4 py-2">
                    <span className="">{b.image}{b.nameBn}</span>
                    <span>{b.today}</span>
                    <span><h2>টাকা/{b.unit}</h2></span>
                    {b.change.dir === "up" ?
                        <span className="text-green-500">▼{b.change.pct}%</span> : ""
                    }
                    {b.change.dir === "down" ?
                        <span className="text-red-500">▲{b.change.pct}%</span> : ""}
                    {b.change.dir === "flat" ? <span className="text-gray-500">―{b.change.pct}%</span> : ''}

                </span>)}
            </MarqueeText>


        </div>
    );
};

export default Marque;
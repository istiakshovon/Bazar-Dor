import CategoryProducts from "@/components/CategoryProducts";

interface CatagoryPageProps {
    params: {
        slug: string;
    };
}

const CatagoryPage = async ({ params }: CatagoryPageProps) => {
    const { slug } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${slug}`)
    const data = await res.json()

    const fes = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data2 = await fes.json()

    const length = data2.filter((f: any) => f.category === data.slug).length




    return (
    <div className='bg-base-300 p-4'>
        <div className='flex bg-base-200 rounded-2xl p-3'>
            <div><span>{data.icon}</span></div>
            <div>
                <h2 className='text-2xl font-bold'>{data.nameBn}</h2>
                <h2>{length}টি পণ্যের আজকের দাম ও পরিবর্তন</h2>
            </div>
        </div>

        <CategoryProducts
            bazar={data2.filter((d: any) => d.category === data.slug)}
        />
    </div>
);
};

export default CatagoryPage;

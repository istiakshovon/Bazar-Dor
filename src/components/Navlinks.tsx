import Link from 'next/link';

interface NavlinksProps {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Navlinks = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")
    const data: NavlinksProps[]  = await res.json()
    console.log(data)
    return (
        <div className='flex gap-4 justify-center items-left'>
            {data.map((e, id) => <Link key={id} href={`/catagory/${e.slug}`}>{e.icon}{e.nameBn}</Link>)}
        </div>
    );
};

export default Navlinks;
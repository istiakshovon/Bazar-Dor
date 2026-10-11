import React from 'react';

interface CatagoryPageProps {
    params: {
        slug: string;
    };
}

const CatagoryPage = async ({ params }: CatagoryPageProps) => {
    const {slug} = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/categories/${slug}`)
    const data = await res.json()
    return (
        <div>
           <span> {data.icon}</span>
            <h2>{data.nameBn}</h2>
        </div>
    );
};

export default CatagoryPage;

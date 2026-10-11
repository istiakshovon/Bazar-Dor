import Banner from "@/components/Banner";
import Marque from "@/components/Marque";
import Products from "@/components/Products";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
 

  return (
 <div>
  <Banner></Banner>
  <Products></Products>
 </div>
  );
}

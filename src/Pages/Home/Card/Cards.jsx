import { useEffect, useState } from "react";
import Card from "./Card";
import Renul from "../RenaulSection/Renul";


const Cards = () => {
    const [data,setData]=useState()
    useEffect(()=>{
        fetch('./gallery.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])



    const gradientStyle = {
        background: 'linear-gradient(180deg, rgba(225, 252, 255, 0.22) 10.37%, rgba(122, 225, 237, 0.29) 100%)',
      };
    
    return (
        <div className="mt-20" >
        <h1 className="mt-20 text-5xl font-jost  text-[#2082D3] font-semibold text-center">Discover the Beauty of Restoration and explore
<br />our services today!</h1>
<div className="lg:h-[600px] md:h-[1000px] h-[1900px]" style={gradientStyle}>
    <p className="text-center text-xl font-popins my-5">Residentials to commercial buildings, we reglaze everything</p>
        <div className="grid pl-3 md:pl-5 md:pr-5 lg:pl-0 mt-20 container mx-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {
                data?.map(item=><Card key={item.id} item={item}></Card>)
            }
        </div>
</div>
<div className="-mt-20 hidden md:hidden lg:block">
<Renul></Renul>
</div>
            
        </div>
    );
};

export default Cards;
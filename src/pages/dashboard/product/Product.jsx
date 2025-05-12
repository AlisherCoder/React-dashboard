import { api } from "@/api";
import React, { useEffect, useState } from "react";
import img from "../../../assets/photo.avif";
import toast from "react-hot-toast";

const Product = () => {
   const [data, setData] = useState(null);
   const [reload, setReload] = useState(false);

   useEffect(() => {
      api.get("/products").then((res) => {
         setData(res.data);
      });
   }, [reload]);

   const handleDelete = (id) => {
      api.delete(`/products/${id}`)
         .then((res) => {
            toast.success("Deleted");
            setReload((p) => !p);
         })
         .catch()
         .finally();
   };

   return (
      <div className="">
         <div className="h-[80px] pt-5">
            <h1 className="text-center text-2xl">All products</h1>
         </div>
         <div className="grid grid-cols-4 gap-4 p-2.5 h-screen overflow-auto">
            {data?.map((prd) => (
               <div key={prd.id} className="text-center rounded-[4px] shadow-2xl shadow-gray-600">
                  <div>
                     <img className="w-full rounded-[4px]" src={prd.image} alt="" />
                  </div>
                  <h2 className="text-2xl"> {prd.name} </h2>
                  <p>{prd.color}</p>
                  <p className="font-bold">${prd.price} USD</p>
                  <div className="p-4">
                     <button onClick={() => handleDelete(prd.id)} className="bg-red-700 rounded-[8px] text-amber-50 px-2 py-1">
                        Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Product;

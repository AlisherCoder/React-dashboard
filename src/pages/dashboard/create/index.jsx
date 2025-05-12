import React from "react";

const Create = () => {
   return (
      <div className="grid h-screen place-items-center">
         <div>
            <h1 className="text-3xl">Create product</h1>
         </div>
         <div className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <form class="max-w-md mx-auto space-y-5 px-3 mt-4 w-[500px] h-[600px]">
               <div>
                  <label class="mb-2 text-sm text-slate-900 font-medium block">Name</label>
                  <input type="email" placeholder="Enter name" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label class="mb-2 text-sm text-slate-900 font-medium block">Price</label>
                  <input type="number" placeholder="Enter number" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <div>
                  <label class="mb-2 text-sm text-slate-900 font-medium block">Color</label>
                  <input type="text" placeholder="Enter color" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
               </div>

               <button type="button" class="!mt-8 px-6 py-2.5 text-sm font-medium bg-[#333] hover:bg-[#222] text-white rounded-sm cursor-pointer">
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default Create;

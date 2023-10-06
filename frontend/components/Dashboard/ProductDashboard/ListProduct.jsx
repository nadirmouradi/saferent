import Link from 'next/link';
import React from 'react';


const ListProduct = () => {
  return (
    <div class="flex">         
      
<div class=" ml-10 mb-3 mt-3 max-w-sm bg-white  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class=" rounded-t-lg w-[100%]" src="/assets/testproduct/dacia1.jpg" alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Dacia duster model 2018  meknes</h5>
        </a>
        <br />
        <p className="text-sm">rent by hour</p>
        <br />
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">MAD 300</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>



        
    </div>
  );
}

export default ListProduct;

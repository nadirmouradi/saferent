import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "/assets/testproduct/dacia1.jpg",
        img2 : "/assets/testproduct/dacia2.jpg",
        img3 : "/assets/testproduct/dacia1.jpg",
        img4 : "/assets/testproduct/dacia2.jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className='flex mx-[15%] pt-10 w-[70%] flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-[25%] rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-[25%] rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-[25%] rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-[25%] rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>nadir mouradi</span>
                    <h1 className='text-3xl font-bold'>dacia duster model 2018</h1>
                </div>
                <p className='text-gray-700'>
                    dacia duster model 2018 cousin cuire bon prix
                </p>
                <h6 className='text-2xl font-semibold'>MAD 199.00</h6>
                <table>

                <td>
                <div className='flex flex-row items-center gap-12'>
                <div className='flex flex-row items-center'>
                <p className='text-gray-700 mr-1'>
                    rent by hours :  
                </p>
                        <button className='bg-gray-200 w-7 h-7  rounded-lg text-violet-800 ' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 w-7 h-7 rounded-lg text-violet-800 ' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    </div></td>
                <td>

                
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                    <p className='text-gray-700 mr-1'>
                    quantity :  
                </p>
                        <button className='bg-gray-200 w-7 h-7 rounded-lg text-violet-800 ' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 w-7 h-7 rounded-lg text-violet-800 ' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                </div></td></table>
                    <button className='bg-[#f06d63] text-white font-semibold py-3 px-16 rounded-xl h-full'>order</button>
            </div>
        </div>
    )
}

export default ProductPage
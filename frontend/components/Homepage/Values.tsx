import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      
      <p className=" text-5xl font-meduim text-center mt-3">
        Our Values
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center mt-1">
        <img src="/assets/carvalue.png" alt="v1" style={{ width: '300px', height: 'auto' }} />
          <p className="text-2xl font-semibold ">Car rental</p>
          <p className="text-gray-500 text-center">
          Discover the perfect rental car for <br /> your next adventure. Our online store <br /> offers a wide selection of rental cars, <br /> ranging from economy to luxury
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/equipmentvalue.png"  style={{ width: '200px', height: 'auto' }} alt="v1"  />
          <p className="text-2xl font-semibold">Equipment rental</p>
          <p className="text-gray-500 text-center">
          including outdoor gear, sports equipment, <br /> and tools, all maintained to the highest <br /> standards for your safety and satisfaction. With <br /> flexible rental periods  and competitive pricing.
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/costumvalue.png"  style={{ width: '260px', height: 'auto' }} alt="v1" />
          <p className="text-2xl font-semibold">Costume rental</p>
          <p className="text-gray-500 text-center">
          offers a variety of costume rentals for <br/> any  occasion, from Halloween to themed <br /> parties, all  maintained to the highest <br /> standards  for your satisfaction. 
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mt-24 ">
          <img src="/assets/boatvalue.png" alt="v1" style={{ width: '300px', height: 'auto' }}  />
          <p className="text-2xl font-semibold ">Boat rental </p>
          <p className="text-gray-500 text-center">
          a wide range of boat rentals, from kayaksv<br /> to motorboats, all maintained to the highest <br/> standards for your safety and enjoyment. With <br/> flexible rental periods and competitive pricing
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center mt-14 ">
          <img src="/assets/vocationvalue.png" alt="v1" style={{ width: '300px', height: 'auto' }}   />
          <p className="text-2xl font-semibold ">Vacation rental </p>
          <p className="text-gray-500 text-center">
          vacation rentals, including apartments, <br/> villas, and cabins, all maintained to the <br/>  highest standards for  your comfort<br/> and satisfaction
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center ">
          <img src="/assets/storevalue.png" alt="v1" style={{ width: '300px', height: 'auto' }}  />
          <p className="text-2xl font-semibold ">Stores rental </p>
          <p className="text-gray-500 text-center">
          commercial space rentals, including storefronts <br /> and warehouses, all maintained to the highest <br/> standards for your convenience and success
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
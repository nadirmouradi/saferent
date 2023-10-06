import React from 'react';

const FilterDashboard = () => {
  return (
    <div className='py-[25px] px-[25px] '>
        <div className='flex items-center '>
            
            <div>
                <label className='text-sm'> rent by : </label>
                <select name="" className='bg-[#faf5f3] text-sm py-2 px-2 rounded-md shadow-sm' >
                    <option value="h">Hours</option>
                    <option value="d">Days</option>
                    <option value="w">Weeks</option>
                    <option value="m">Months</option>
                </select>
            </div>
            <div className='ml-4'>
                <label className='text-sm'>filter by : </label>
                <select name="" className='bg-[#faf5f3] text-sm py-2 px-1 rounded-md shadow-sm'>
                    <option value="meknes" >meknes</option>
                    <option value="rabat">rabat</option>
                    <option value="casablanca">casablanca</option>
                    <option value="tanger">tanger</option>
                </select>
            </div>
        </div>
        
    </div>
  );
}

export default FilterDashboard;

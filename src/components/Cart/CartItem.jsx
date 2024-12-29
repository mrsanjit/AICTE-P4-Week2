import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="./images/1.png" alt="picture"/>
            </div>

   
            <div className='flex flex-col justify-between flex-grow'>
                <span className='font-bold text-sm'>Product Title</span>
                <span className='text-red-500 text-xs'>Extra Info</span>
                <span className='text-gray-500 text-xs'>$20.00</span>
            </div>
        </div>
    </div >
  )
}
export default CartItem

import React from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

    const navigate=useNavigate();
    const handleCheckOut = () => {
        // alert('Checkout Successful')
     
        navigate('/Checkout')
        navigate('/DeliveryAddressForm')
    }
return (
    <div className="lg:grid lg:grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2">  {/* CartItem section takes 2 columns on large screens */}
          {[1,1].map((item)=>  <CartItem />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0"> {/* Checkout Details section */}
            <div className="border p-4">
                <p className="uppercase font-bold opacity-60 pb-4">Price Detail</p>
                <hr />
                <div className="space-y-3 font-semibold">
                    <div className="flex justify-between pt-3 text-black">
                        <span>Price</span>
                        <span>Rs 583</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Discount</span>
                        <span className='text-green-600'>Rs 58</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Delivery Charges</span>
                        <span className='text-green-600'>Free</span>
                    </div>
                    <div className="flex justify-between pt-3 text-black">
                        <span>Total Amount</span>
                        <span className='text-green-500'>Rs 5830</span>
                    </div>
                </div>
                <button onClick={handleCheckOut} className='w-full mt-5 bg-purple-600 text-white py-2.5' >
                    Checkout
                </button>
            </div>
        </div>
    </div>
)
}

export default Cart 
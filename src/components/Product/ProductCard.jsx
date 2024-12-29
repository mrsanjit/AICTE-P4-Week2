import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const navigate=useNavigate();
    return (
        <div>
            <div onClick={()=>navigate('/ProductDetail')} className='productcard w-[15rem] m-3 transition-all cursor-pointer '>
                <div className='h-[20rem]  border border-blue-300  '  >
                    <img className='h-full w-full object-cover object-left-top' src={product.imageurl} alt="" />
                </div>
                <div className='textpart bg-blue-200 p-3'>
                    <div>
                        <p className='text-lg font-bold text-gray-700'>{product.Brand}</p>
                        <p>{product.title}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-semibold'>RS{product.price}</p>
                        <p className='line-through opacity-50'>RS{product.discount}</p>
                        <p className='text-green-500 '>{product.discountpercent}%off</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

import React from 'react';

const HomeSectionCard = ({ product }) => {
  return (
    <div className='productcard w-[13rem] m-3 transition-all cursor-pointer   '>
      <div className='h-[20rem] border border-blue-300'>
        <img
          className='h-full w-full object-cover object-left-top hover:scale-110'
          src={product.imageurl}
          alt="product"
        />
      </div>

      <div className='textpart bg-blue-200 p-3'>
        <div>
          <p className='text-lg font-bold text-gray-700'>{product.Brand}</p>
          <p>{product.title}</p>
        </div>

        <div className='flex justify-between'>
          <p className='font-semibold'>RS{product.price}</p>
          <p className='line-through opacity-50'>RS{product.discount}</p>
          <p className='text-green-500'>{product.discountpercent}% off</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;

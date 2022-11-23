import Image from 'next/image';
import React from 'react'

type Props = {
  title: string;
  image: string;
}

const ProductItem = ({ title, image }: Props) => {
  return (
    <div className='flex gap-2 border bg-blue-dark rounded-xl p-3 items-center text-white m-2'>
      <div className='border rounded-xl overflow-hidden'>
        <Image
          src={image}
          alt=""
          width={250}
          height={250}
        />
      </div>
      <div>{title}</div>
    </div>
  )
}

export default ProductItem
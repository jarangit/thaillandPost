import React from 'react'
import Image from 'next/image'
type Props = {
  title: string;
  createdAt: string;
  image: string;
  key: any;
}

const GridContentItem = ({ title, createdAt, image, key }: Props) => {
  return (
    <div key={key} className="flex gap-6 items-center  border-b pb-3 border-gray-light md:border-none">
      <div className='relative w-[400px] h-[100%] md:h-[120px] rounded-lg overflow-hidden'>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className='flex flex-col justify-between  h-full'>
        <div className='text-ellipsis'>{title}</div>
        <div className='text-blue-dark text-xs'>{createdAt}</div>
      </div>
    </div>
  )
}

export default GridContentItem
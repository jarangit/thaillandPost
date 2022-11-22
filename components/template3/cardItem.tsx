import Image from 'next/image';
import React from 'react'

type Props = {
  title: string;
  desc: string;
}

const CardItem = ({ title, desc }: Props) => {
  return (
    <div className='p-6 rounded-3xl bg-white relative mt-10 drop-shadow-md'>
      <div className='absolute w-12 h-12 bg-[#FF3A1C] -top-7 rounded-lg flex justify-center items-center'>
        <Image
          src={"/img/icons/doc.svg"}
          alt = ""
          width={25}
          height={25}
        />
      </div>
      <div className='flex flex-col gap-10 mt-6 cursor-pointer hover:text-blue'>
        <div>{title}</div>
        <div className='text-xs'>{desc}</div>
      </div>
      <div className='mt-3 flex justify-end text-blue hover:text-red transition-all cursor-pointer'>Read more</div>
    </div>
  )
}

export default CardItem
import Image from 'next/image';
import React from 'react'
import { IoIosArrowDroprightCircle } from 'react-icons/io';

type Props = {
  title: string;
  desc: string;
}

const CardItem = ({ title, desc }: Props) => {
  const styled = {
    root: `
    p-6 rounded-3xl bg-white relative mt-10 drop-shadow-md
    `,
    boxImage: `
    absolute w-12 h-12 bg-[#FF3A1C] -top-7 rounded-lg flex justify-center items-center
    `,
    boxContent: `
    flex flex-col gap-10 mt-6 cursor-pointer hover:text-blue
    `,
    boxReadMore: `
    mt-3 flex justify-end items-center gap-1 text-blue hover:text-red transition-all cursor-pointer
    `

  }
  return (
    <div className={`${styled.root}`}>
      <div className={`${styled.boxImage}`}>
        <Image
          src={"/img/icons/doc.svg"}
          alt=""
          width={25}
          height={25}
        />
      </div>
      <div className={`${styled.boxContent}`}>
        <div>{title}</div>
        <div className='text-xs'>{desc}</div>
      </div>
      <div className={`${styled.boxReadMore}`}>
        <div>
          Read more
        </div>
        <div>
          <IoIosArrowDroprightCircle size={25} />
        </div>
      </div>
    </div>
  )
}

export default CardItem
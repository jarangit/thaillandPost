import React from 'react'
import Image from 'next/image'
type Props = {
  title: string;
  createdAt: string;
  image: string;
  key: any;
}

const GridContentItem = ({ title, createdAt, image, key }: Props) => {

  const styled = {
    root:`
    flex gap-6 items-center  border-b pb-3 border-gray-light md:border-none cursor-pointer
    `,
    boxImage:`
    relative w-[400px] h-[100%] md:h-[120px] rounded-lg overflow-hidden
    `,
    boxContent:`
    flex flex-col justify-between  h-full
    `
  }
  return (
    <div key={key} className={`${styled.root}`}>
      <div className={`${styled.boxImage}`}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`${styled.boxContent}`}>
        <div className='text-ellipsis hover:text-blue-dark'>{title}</div>
        <div className='text-blue-dark text-xs'>{createdAt}</div>
      </div>
    </div>
  )
}

export default GridContentItem
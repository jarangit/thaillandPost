import Image from 'next/image';
import React from 'react'

type Props = {
  title: string;
  desc: string;
  image: string;
  createdAt: string;
}

const PostCard = ({ title, desc, image, createdAt }: Props) => {
  return (
    <div className={` rounded-2xl shadow-lg cursor-pointer hover:text-blue`}>
      <div className={`relative w-full h-[200px] rounded-2xl overflow-hidden`}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={`p-3 lg:p-6 flex flex-col gap-3 lg:gap-6 mt-3 lg:mt-6 `}>
        <div className={`text-lg font-bold `}>
          {title}
        </div>
        <div className={`text-sm`}>
          {desc}
        </div>
        <div className={`text-blue-dark mt-10`}>
          {createdAt}
        </div>
      </div>
    </div>
  )
}

export default PostCard
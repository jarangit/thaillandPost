import Image from 'next/image'
import React from 'react'

type Props = {
  title:string
  image:string
}

const ActivityItem = ({title, image}: Props) => {
  return (
    <div className=' rounded-md overflow-hidden  w-[100%] relative cursor-pointer'>
      <Image
        src={image}
        alt=""
        width={300}
        height={100}
        // fill
        // style={{zIndex: "-1" }}
      />
      <div className='absolute w-full top-20 h-fit text-xs py-2 px-3 text-white bg-[#002369] opacity-80'>
        <div className='opacity-100'>
        {title}
        </div>
      </div>
    </div>
  )
}

export default ActivityItem
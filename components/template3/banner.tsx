import Image from 'next/image'
import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='w-full h-[500px] relative'>
      <Image
        src={"/img/bannerTemplate3.png"}
        alt=""
        fill
        style={{ objectFit: "cover"}}
      />
    </div>
  )
}

export default Banner
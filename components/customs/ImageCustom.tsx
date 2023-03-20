import Image from 'next/image'
import React from 'react'

const ImageCustom = ({ src, alt, ...props }: any) => {
  return (
    <>
      <Image
        src={src ? src : "/img/defaultImage.png"}
        alt='alt'
        {...props}
      />
    </>
  )
}

export default ImageCustom
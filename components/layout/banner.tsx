import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

type Props = {}
const dataBanner = [
  {
    id: "1",
    image: "/img/banner1.png",
  },
  {
    id: "2",
    image: "/img/banner2.png",
  },
]
const Banner = (props: Props) => {
  const [currentImage, setCurrentImage] = useState({
    id: dataBanner[0].id,
    image: dataBanner[0].image
  })
  const [showImage, setShowImage] = useState(true)


  const onChangeBanner = useCallback((id: string) => {
    if (id) {
      setShowImage(false)
      const found = dataBanner.find((item: any) => item.id === id)
      if (found) {
        setCurrentImage({
          ...found
        })
      } else {
        setCurrentImage({
          id: dataBanner[0].id,
          image: dataBanner[0].image
        })
      }
    }
    setTimeout(() => {
      setShowImage(true)
    }, 200);
  }, [],)

  const renderButton = (data: any) => {
    return (
      <div className={`flex gap-3 mt-1 md:mt-3 justify-center`}>
        {data && data.map((item: any, key: number) => (
          <div key={key} className={`w-[10px] md:w-[15px] h-[10px] md:h-[15px] rounded-full bg-blue-light cursor-pointer ${currentImage.id == item.id ? "border-2 border-blue-dark" : ""}`} onClick={() => onChangeBanner(item.id)} />
        ))}
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`max-w-[1300px] mx-auto my-10 px-3`}>
      {/* <div className={`relative w-full !h-fit min-h-[300px] md:min-h-[400px] max-h-[500px]  duration-500 transition-all rounded-2xl overflow-hidden ${showImage ? "opacity-100" : "opacity-0"}`}>
        {showImage && (
          <div>
            <Image
              src={currentImage.image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
      </div>
      <div>
        {renderButton(dataBanner)}
      </div> */}
      <Slider {...settings}>
        {dataBanner.map((item, key) => (
          <div key={key} className={`relative w-full !h-fit min-h-[300px] md:min-h-[400px] max-h-[500px]  duration-500 transition-all rounded-2xl overflow-hidden`}>
            <Image
              src={item.image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

      </Slider>
    </div>
  )
}

export default Banner
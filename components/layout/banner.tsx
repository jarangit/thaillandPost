import React, { useCallback, useMemo, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { dataBanner } from '../../constant/banner'
type Props = {}

interface IBannerMB {
  title: string, desc: string, image: string, key: any
}
const Banner = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000.
  };
  const styled = useMemo(() => ({
    rootMB: `
    !md:hidden  relative !flex w-full items-center  md:min-h-[400px] !h-fit max-h-[500px] !rounded-2xl !overflow-hidden 
    `,
    boxContentMB: `
    backdrop-brightness-50 backdrop-blur-sm w-full lg:max-w-[50%] p-3 lg:p-10 text-white
    `,
    boxContent: `
    hidden md:!flex w-full bg-blue items-center  md:min-h-[400px] !h-fit max-h-[500px] !rounded-2xl !overflow-hidden 
    `,
    boxImage: `
    relative w-[50%] hidden md:block min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden
    `
  }), [])
  const BannerMB = ({ key, title, desc, image }: IBannerMB) => {

    return (
      <div key={key} className={`${styled.rootMB}`}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div className={`${styled.boxContentMB}`}>
          <div className={`z-10  text-md lg:text-2xl font-bold mb-10`}>{title}</div>
          <div className={`text-lg`}>{desc}</div>
          <div className={`hidden w-[50%] z-0 rounded-2xl overflow-hidden`}>
            <Image
              src={image}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`max-w-[1300px] mx-auto my-10 px-[5%]`}>
      <Slider {...settings}>
        {dataBanner.map((item, key) => (
          <>
            <div key={key} className={`${styled.boxContent}`}>
              <div className={`w-full md:max-w-[50%] p-3 lg:p-10 text-white`}>
                <div className={` text-xs lg:text-2xl font-bold mb-10`}>{item.title}</div>
                <div>{item.desc}</div>
              </div>
              <div className={`${styled.boxImage}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={`md:hidden`}>
              <BannerMB
                title={item.title}
                key={key}
                image={item.image}
                desc={item.desc}
              />
            </div>

          </>
        ))}
      </Slider>
    </div>
  )
}

export default Banner
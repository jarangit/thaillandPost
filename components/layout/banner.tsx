import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

type Props = {}
const dataBanner = [
  {
    id: "1",
    image: "/img/banner1.png",
    title: `เช็กวันหยุดไปรษณีย์ไทย เดือนกรกฎาคม 2565 
    เปิดบริการวันไหนบ้าง`,
    desc: `บริษัทไปรษณีย์ไทย จำกัด เปิดให้บริการในวันหยุดยาวเดือนกรกฎาคม 2565 ทั้งรับฝาก
    และพร้อมไปรษณีย์นำจ่ายทั่วประเทศในช่วงวันหยุดเดือนกรกฎาคม 2565 `,
  },
  {
    id: "2",
    image: "/img/post.png",
    title: `เช็กวันหยุดไปรษณีย์ไทย เดือนกรกฎาคม 2565 
    เปิดบริการวันไหนบ้าง`,
    desc: `บริษัทไปรษณีย์ไทย จำกัด เปิดให้บริการในวันหยุดยาวเดือนกรกฎาคม 2565 ทั้งรับฝาก
    และพร้อมไปรษณีย์นำจ่ายทั่วประเทศในช่วงวันหยุดเดือนกรกฎาคม 2565 `,
  },
]
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
  const BannerMB = ({ key, title, desc, image }: IBannerMB) => {
    return (
      <div key={key} className={`!md:hidden  relative !flex w-full items-center  md:min-h-[400px] !h-fit max-h-[500px] !rounded-2xl !overflow-hidden `}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <div className={`backdrop-brightness-50 backdrop-blur-sm w-full lg:max-w-[50%] p-3 lg:p-10 text-white`}>
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
            <div key={key} className={`hidden md:!flex w-full bg-blue items-center  md:min-h-[400px] !h-fit max-h-[500px] !rounded-2xl !overflow-hidden `}>
              <div className={`w-full md:max-w-[50%] p-3 lg:p-10 text-white`}>
                <div className={` text-xs lg:text-2xl font-bold mb-10`}>{item.title}</div>
                <div>{item.desc}</div>
              </div>
              <div className={`relative w-[50%] hidden md:block min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden`}>
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
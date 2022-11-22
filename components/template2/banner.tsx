import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { mockDataBannerTemplate2 } from "../../constant/bannerTemplate2"
import BannerMB from '../layout/bannerMobile'
type Props = {}

const BannerTemplate2 = (props: Props) => {
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


  return (
    <div className={`max-w-[1300px] mx-auto my-10 px-[5%]`}>
      <Slider {...settings}>
        {mockDataBannerTemplate2.map((item, key) => (
          <div key={key}>
            <div className='grid-cols-3 gap-24 items-center bg-blue-dark h-[400px] my-10 rounded-3xl p-3 hidden md:grid'>
              <div className='col-span-1 relative '>
                <div className='absolute  -top-[225px] left-5 '>
                  <div className='w-[350px] h-[450px] relative  rounded-3xl overflow-hidden'>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-2 text-white'>
                <div className='text-3xl font-bold mb-6'>
                  {item.title}
                </div>
                <div>
                  {item.content}
                </div>
              </div>
            </div>
            <div className={`md:hidden`}>
              <BannerMB
                title={item.title}
                key={key}
                image={item.image}
                desc={item.content}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default BannerTemplate2
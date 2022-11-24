import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Slider from 'react-slick'
import { mockDataProducts } from '../../constant/product'
import ProductItem from './productItem'
type Props = {}

const ProductList = (props: Props) => {
  const ArrowLeft = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
      {...props}
      className='invisible lg:visible absolute -bottom-10 right-8 text-blue hover:text-blue-dark'
    >
      <IoIosArrowDropleftCircle
        size={30}
      />

    </button>
  );
  const ArrowRight = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
      {...props}
      className="invisible lg:visible absolute -bottom-10 right-0 text-blue hover:text-blue-dark"
    >
      <IoIosArrowDroprightCircle
        size={30}
      />
    </button>
  );
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 3,
    slidesPerRow: 1,
    arrows: true,
    swipeToSlide: true,
    variableWidth: true,
    accessibility: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='h-full bg-white p-6 rounded-3xl drop-shadow-md relative'>
      <div className='text-2xl text-blue'>
        ข่าวสารเกี่ยวกับสินค้าและบริการ
      </div>
      <Slider {...settings}>
        {mockDataProducts.map((item, key) => (
          <div key={key}>
            <ProductItem
              title={item.title}
              image={item.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductList
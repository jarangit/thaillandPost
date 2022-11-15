import React from 'react'
import { mockPost } from '../../constant/posts.js'
import PostCard from '../card/postCard'
import Slider from 'react-slick'
type Props = {}

const PostSection = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
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

    // <div className={`myContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !py-8`}>
    <div className={`myContainer !my-10 !py-10`}>
      <Slider {...settings}>
        {mockPost.map((item, key) => (
          <div key={key} className = {`p-4`}>
            <PostCard
              title={item.title}
              image={item.image}
              desc={item.desc}
              createdAt={item.createdAt}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PostSection
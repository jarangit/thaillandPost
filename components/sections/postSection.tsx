import React from 'react'
import { mockPost } from '../../constant/posts.js'
import PostCard from '../card/postCard'
import Slider from 'react-slick'
type Props = {
  data: any;
}

const PostSection = ({ data }: Props) => {
  console.log('%cMyProject%cline:9%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px', data)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
    <div className={`myContainer !my-10 !py-10`}>
      <Slider {...settings}>
        {data.ContentList.map((item: any, key: any) => (
          <div key={key} className={`pr-3 py-4`}>
            <PostCard
              title={item.contentNameTh}
              image={item.image}
              desc={item.detailTh}
              createdAt={item.startDate}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default PostSection
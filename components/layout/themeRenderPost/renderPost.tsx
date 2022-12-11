import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdOutlineAttachFile } from 'react-icons/md';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type Props = {
  data: any;
}


const RenderPost = ({ data }: Props) => {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const { galleries } = data

  const onMovePrevRequest = () => {
    setPhotoIndex((photoIndex + galleries.length - 1) % galleries.length)
  }
  const onMoveNextRequest = () => {
    setPhotoIndex((photoIndex + galleries.length + 1) % galleries.length)
  }

  const onOpenImage = (id: any) => {
    setIsOpenLightBox(true)
    setPhotoIndex(id)
  }

  useEffect(() => {

  }, [photoIndex])

  return (
    <div>
      <div className={`grid lg:grid-cols-2 gap-10`}>
        <div className='col-span-2 lg:col-span-1'>
          <div className={`relative rounded-xl overflow-hidden w-full max-w-[350px] lg:max-w-none h-[400px]`}>
            <Image src={data.thumbnail} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1'>
          <div className={`flex flex-col gap-10`}>
            <div className={`text-3xl text-blue`}>{data.title}</div>
            <div>{data.contents}</div>
          </div>
        </div>

        <div className={`col-span-2`}>
          <div className={`text-blue text-xl mb-3`}>ภาพประกอบ</div>
          <div className={`grid grid-cols-2 lg:grid-cols-6 gap-3 justify-between`}>
            {data.galleries.map((item: any, key: any) => (
              <div key={key} className={`relative w-full h-[120px] rounded-lg overflow-hidden cursor-pointer`} onClick={() => onOpenImage(key)}>
                <Image src={item} alt="" fill style={{ objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>
        <div className={`col-span-2`}>
          <div className={`text-blue text-xl mb-3`}>แหล่งอ้างอิง</div>
          <Link href={data.ref}>
            <div className='truncate max-w-[300px] lg:max-w-none'>{data.ref}</div>
          </Link>
        </div>
        <div className={`col-span-2`}>
          <div className={`text-blue text-xl mb-3`}>ไฟล์แนบ</div>
          <div className={`border rounded-sm w-full border-gray-light divide-gray-light divide-y-[1px]`}>
            {data.files.map((item: any, key: number) => (
              <div key={key} className={`p-3 rounded-sm flex justify-between items-center cursor-pointer`}>
                <div className='flex gap-3'>
                  <div className='text-gray-dark'>
                    <MdOutlineAttachFile size={25} />
                  </div>
                  <div>{item.title}</div>
                </div>
                <div className={`text-blue`} >Download</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* light box */}
      {galleries && isOpenLightBox ? (
        <Lightbox
          mainSrc={galleries[photoIndex]}
          nextSrc={galleries[(photoIndex + 1) % galleries.length]}
          prevSrc={galleries[(photoIndex + galleries.length - 1) % galleries.length]}
          onCloseRequest={() => setIsOpenLightBox(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
          onImageLoadError = {() => console.log("loading")}
          mainSrcThumbnail = {"1000px"}
        />
      ) : null}
    </div>
  )
}

export default RenderPost
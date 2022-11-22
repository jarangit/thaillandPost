import Image from "next/image"
import { useMemo } from "react"

interface IBannerMB {
  title: string, desc: string, image: string, key: any
}
const BannerMB = ({ key, title, desc, image }: IBannerMB) => {
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
export default BannerMB
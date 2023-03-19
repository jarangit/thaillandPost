import { useContext, useEffect } from 'react'
import Banner from '../components/layout/banner'
import DownloadAndAgencySection from '../components/sections/downloadAndAgencySection'
import PostSection from '../components/sections/postSection'
import { AppContext } from '../context/appState'
import { contentList, layoutActive } from '../service/post-th'

export default function Home() {

  // const getData = async () => {
  //   const res = await contentList({
  //     contentNameEn: "",
  //     contentNameTh: "",
  //     contentTypeId: "",
  //     count: "",
  //     page: "",
  //     size: "",
  //     sortBy: "",
  //     sortOrder: ""
  //   })
  //   console.log(res)
  // }
  // useEffect(() => {
  //   getData()
  //   return () => { }
  // }, [])

  return (
    <>
      <Banner />
      <PostSection />
      <DownloadAndAgencySection />
    </>
  )
}

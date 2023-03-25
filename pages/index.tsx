import { useContext, useEffect, useState } from 'react'
import Banner from '../components/layout/banner'
import DownloadAndAgencySection from '../components/sections/downloadAndAgencySection'
import PostSection from '../components/sections/postSection'
import { AppContext } from '../context/appState'
import { contentList, layoutActive } from '../service/post-th'
import Layout1 from '../components/layout/active/layout1'
import { mockLayoutActive } from '../constant/mocks/mockLayoutActive'
import Layout2 from './layout2'
import Layout3 from './layout3'

export default function Home() {
  const [data, setData] = useState<any>()
  const getData = async () => {
    const res = await layoutActive()
    console.log('%cMyProject%cline:15%cres', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', res)
  }
  useEffect(() => {
    setData(mockLayoutActive)
    getData()
    return () => { }
  }, [])

  return (
    <>
      {data?.IsActive === 1 && (
        <Layout1 data={data}/>
      )}
      {data?.IsActive === 2 && (
        <Layout2 data={data}/>
      )}
      {data?.IsActive === 3 && (
        <Layout3 data={data}/>
      )}
    </>
  )
}

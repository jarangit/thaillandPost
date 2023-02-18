import { useContext, useEffect } from 'react'
import Banner from '../components/layout/banner'
import DownloadAndAgencySection from '../components/sections/downloadAndAgencySection'
import PostSection from '../components/sections/postSection'
import { AppContext } from '../context/appState'

export default function Home() {

 

  return (
    <>
      <Banner />
      <PostSection />
      <DownloadAndAgencySection />
    </>
  )
}

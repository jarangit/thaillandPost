import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/card/postCard'
import Banner from '../components/layout/banner'
import DownloadAndAgencySection from '../components/sections/downloadAndAgencySection'
import PostSection from '../components/sections/postSection'

export default function Home() {
  return (
    <>
      <Banner />
      <PostSection />
      <DownloadAndAgencySection />
    
    </>
  )
}

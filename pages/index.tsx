import Head from 'next/head'
import Image from 'next/image'
import PostCard from '../components/card/postCard'
import Banner from '../components/layout/banner'
import PostSection from '../components/sections/postSection'

export default function Home() {
  return (
    <>
      <Banner />
      <PostSection />
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <div className={`text-blue`}>Thailand Post Project</div>
        <div>Now Developing Project...</div>
      </div>
    </>
  )
}

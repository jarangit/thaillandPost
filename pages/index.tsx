import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/layout/banner'

export default function Home() {
  return (
    <>
      <Banner />
      <div className={`flex flex-col justify-center items-center min-h-screen`}>
        <div className={`text-blue`}>Thailand Post Project</div>
        <div>Now Developing Project...</div>
      </div>
    </>
  )
}

import React from 'react'
import DownloadAndAgencySection from '../../sections/downloadAndAgencySection'
import PostSection from '../../sections/postSection'
import Banner from '../banner'

type Props = {
  data:any
}

const Layout1 = ({data}: Props) => {
  return (
    <>
      <Banner data = {data.blog1List}/>
      <PostSection data = {data.blog2List} />
      <DownloadAndAgencySection data = {data.blog3List}/>
    </>
  )
}

export default Layout1
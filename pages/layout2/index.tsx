import React from 'react'
import Banner from '../../components/layout/banner'
import BannerTemplate2 from '../../components/template2/banner'
import GridContents from '../../components/template2/gridContents'

type Props = {}

const Layout2Page = (props: Props) => {
  return (
    <div>
      <BannerTemplate2 />
      <GridContents />
    </div>
  )
}

export default Layout2Page
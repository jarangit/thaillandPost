import React from 'react'
import AgencyList from '../../components/card/agencyList'
import DownloadTable from '../../components/card/downloadTable'
import Banner from '../../components/layout/banner'
import AgencyListTemplate2 from '../../components/template2/agencyList'
import BannerTemplate2 from '../../components/template2/banner'
import CalendalList from '../../components/template2/calendalList'
import GridContents from '../../components/template2/gridContents'

type Props = {}

const Layout2Page = (props: Props) => {
  return (
    <div>
      <BannerTemplate2 />
      <GridContents />
      <>
        <div className="myContainer p-6 grid grid-cols-3 gap-4 !mb-6 !pb-6">
          <div className={`col-span-3 md:col-span-1 `}>
            {/* <AgencyList /> */}
            <AgencyListTemplate2 />
          </div>
          <div className={`col-span-3 md:col-span-2 `}>
            <CalendalList/>
          </div>
        </div>
      </>
    </div>
  )
}

export default Layout2Page